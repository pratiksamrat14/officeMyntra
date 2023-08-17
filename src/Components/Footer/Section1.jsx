import React from "react";
import "./Section1.css";

const OnlineShoopingData = {
  title: "ONLINE SHOPPING",
  class: "online_shooping_class",
  Id: "online_shooping_id",
  link: "",
  list: [
    {
      label: "Men",
      link: "",
    },
    {
      label: "Women",
      link: "",
    },
    {
      label: "Kids",
      link: "",
    },
    {
      label: "Home & Living ",
      link: "",
    },
    {
      label: "Beauty",
      link: "",
    },
    {
      label: "Gift Cards",
      link: "",
    },
    {
      label: "Myntra Insider",
      link: "",
    },
  ],
};
const usefuLinkData = [
  { label: "Blog", link: "" },
  { label: "Careers", link: "" },
  { label: "Site Map", link: "" },
  { label: "Coperate Information", link: "" },
  { label: "Whitehat", link: "" },
];

const customerPoliciesData = [
  { label: "Contact Us", link: "" },
  { label: "FAQ", link: "" },
  { label: "T&C", link: "" },
  { label: "Terms of Use", link: "" },
  { label: "Track Orders", link: "" },
  { label: "Shipping", link: "" },
  { label: "Cancellation", link: "" },
  { label: "Returns", link: "" },
  { label: "Privacy policy", link: "" },
  { label: "Grievance Officer", link: "" },
];

const socialMedia = [
  "https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png",
  "https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png",
  "https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png",
  "https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png",
];
const Section1 = () => {
  return (
    <section className="footer-section1">
      <div className="footer-sub-section1">
        <label htmlFor={OnlineShoopingData.Id}>
          <a href={OnlineShoopingData.link}>{OnlineShoopingData.title}</a>
        </label>

        <ul id={OnlineShoopingData.Id} className={OnlineShoopingData.class}>
          {OnlineShoopingData.list.map((val, index) => {
            return (
              <li key={index} value={val.label}>
                <a href={val.link}>{val.label}</a>
              </li>
            );
          })}
        </ul>
        <label htmlFor="useful_link_id">
          <a href="">USEFUL LINKS</a>
        </label>
        <ul className="useful_links_class" id="useful_links_id">
          {usefuLinkData.map((val, index) => {
            return (
              <li key={index} value={val.label}>
                <a href={val.link}>{val.label}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="footer-sub-section2">
        <br />
        <label htmlFor="customer_policies_id">
          <a href="">CUSTOMER POLICIES</a>
        </label>
        <ul className="cutomer_policies_class" id="cutomer_policies_id">
          {customerPoliciesData.map((val, index) => {
            return (
              <li key={index} value={val.label}>
                <a href={val.link}>{val.label}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="footer-sub-section3">
        <label htmlFor="mobile_app">
          <a href="">EXPERIENCE MYNTRA APP ON MOBILE</a>
        </label>
        <div className="mobile_app">
          <a href="">
            <img src="images/google play store.png" alt="image not found" />
          </a>
          <a href="">
            <img src="images/apple store.png" alt="image not found" />
          </a>
        </div>

        <label htmlFor="social_media_handle_id">KEEP IN TOUCH</label>
        <div className="social_media_handle_class" id="social_media_handle_id">
          {socialMedia.map((val, index) => {
            return <img src={val} alt="not found" key={index} />;
          })}
        </div>
      </div>

      <div className="footer-sub-section4">
        <br />
        <img src="images/orignal product and return policy.PNG" alt="not found" />
    
      </div>

    </section>
  );
};

export default Section1;
