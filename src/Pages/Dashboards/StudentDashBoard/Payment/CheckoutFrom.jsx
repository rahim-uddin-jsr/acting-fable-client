import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import "./CheckoutForm.css";

const CheckoutFrom = ({ selectedClasses, totalPrice }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          price: totalPrice,
        })
        .then((res) => {
          console.log(res.data.clientSecret, 123);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalPrice, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ selectedClasses, totalPrice });

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log({ card });

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: totalPrice,
        date: new Date(),
        quantity: selectedClasses.length,
        selectedItemIds: selectedClasses.map((item) => item._id),
        classIds: selectedClasses.map((item) => item.classId),
        classNames: selectedClasses.map((item) => item.name),
      };

      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        const d = res.data.deleteResult.acknowledged;
        const u = res.data.updateResult.acknowledged;
        const i = res.data.insertResult.acknowledged;

        if (d && u && i) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "payment success!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
    }
  };

  return (
    <>
      <form className="flex flex-col checkout-from" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold text-yellow-400 mb-5">
          Please give your payment credential!
        </h1>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutFrom;
