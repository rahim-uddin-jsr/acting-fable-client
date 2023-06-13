import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useSelectedClaeess from "../../../../hooks/useSelectedClaeess";
import CheckoutFrom from "./CheckoutFrom";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Stripe_PK);
const Payment = () => {
  const { selectedClasses } = useSelectedClaeess();
  const totalPrice = selectedClasses.reduce(
    (sum, classItem) => sum + classItem.price,
    0
  );
  const totalPriceNumber = parseFloat(totalPrice.toFixed(2));

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutFrom
          selectedClasses={selectedClasses}
          totalPrice={totalPriceNumber}
        ></CheckoutFrom>
      </Elements>
    </div>
  );
};

export default Payment;
