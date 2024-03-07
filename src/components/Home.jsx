import { useEffect } from "react";
import Pricing from "./homePage/Pricing";
import Hero from "./homePage/Hero";
import Highlights from "./homePage/Highlights";
import FAQ from "./homePage/FAQ";
import Testimonials from "./homePage/Testimonials";
import { useGetUserQuery } from "../api/capstoneApi";
import { setUser } from "../slice/getUserSlice";
import { useDispatch } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();

  const userId = localStorage.getItem("userId");
  const { data } = useGetUserQuery(userId);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  return (
    <div>
      <Hero />
      <Highlights />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
}

export default Dashboard;
