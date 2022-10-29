/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51Ly9XoFcwUeihgt07VRr2LsgAVcYzL8fA66pzHuTtVtpRqUYgt36WUtXOOdiRF9c3DuyBYGXRNLL2w8nLE6XSuAs00pa49N7xY');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
