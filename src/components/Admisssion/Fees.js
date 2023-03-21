import React from "react";
import { motion } from "framer-motion";
import Navbar2 from "../Navbar2/Navbar2";
// import VisitCard from "../Home/VisitCard";
import Footer from "../Home/Footer";
import "./Fees.css";
const Fees = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar2 />
      <div className="feesContainer">
        <div className="fees">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Facademics%2Ffees.jpg?alt=media&token=26a8c070-d43c-47a1-9cd2-11c316a0cd3e"
            alt=""
          />
        </div>
        <div className="feeTable">
          <h1>School Fees for Year 2023/2024</h1>

          <table>
            <thead>
              <tr>
                <th>FORM</th>
                <th>PER MONTH</th>
                <th>PER ANNUM</th>
                <th>COMPUTER FEE <br /> (4 month)</th>
                <th>EXAM FEE <br /> (half yearly & annual)</th>
                <th>ANNUAL CHARGE <br /> (july)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="head">Nursery</td>
              </tr>
              <tr>
                <td>PLAY GROUP</td>
                <td>₹300</td>
                <td>₹4400</td>
                <td></td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td>Junior Nursery</td>
                <td>₹300</td>
                <td>₹4400</td>
                <td></td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td>Senior Nursery </td>
                <td>₹300</td>
                <td>₹4400</td>
                <td></td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td className="head">Primary School</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Class 1 </td>

                <td>₹300</td>
                <td>₹4400</td>
                <td></td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td>Class 2 </td>

                <td>₹300</td>
                <td>₹4400</td>
                <td></td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td>Class 2</td>

                <td>₹300</td>
                <td>₹4400</td>
                <td>₹500</td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td>Class 3 </td>

                <td>₹300</td>
                <td>₹4400</td>
                <td>₹500</td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td>Class 4 </td>

                <td>₹300</td>
                <td>₹4400</td>
                <td>₹500</td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td className="head">Middle School</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Class 5 </td>

                <td>₹300</td>
                <td>₹4400</td>
                <td>₹500</td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td>Class 6 </td>

                <td>₹350</td>
                <td>₹5000</td>
                <td>₹600</td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td>Class 7 </td>

                <td>₹350</td>
                <td>₹5000</td>
                <td>₹600</td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
              <tr>
                <td>Class 8 </td>

                <td>₹350</td>
                <td>₹5000</td>
                <td>₹600</td>
                <td>₹400</td>
                <td>₹400</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="uniform">
          <h1>Uniforms</h1>

          <hr className="feesLine" />
          <h2>Everyday Uniform</h2>
          <div className="uniformList">
            <h2>SHIRTS</h2>
            <ol>
              <li>Oxford blouse with “Cor Jesu” (must be tucked in) OR</li>
              <li>Red/Navy polos with “Cor Jesu” (long- or short-sleeved)</li>
            </ol>
            <h2>SWEATERS / JACKETS</h2>
            <ol>
              <li>navy sweater with CJ logo (crewneck or cardigan) OR</li>
              <li>Navy jacket with “Cor Jesu” OR</li>
            </ol>
            <h2>TIGHTS / LEGGINGS</h2>
            <ol>
              <li>Navy tights OR</li>
              <li>Black leggings</li>
            </ol>
            <h2>SOCKS</h2>
            <ol>
              <li>Navy knee socks OR</li>
              <li>No-show white socks (no logos/no colors)</li>
            </ol>
            <h2>SHOES</h2>
            <ol>
              <li>Solid white or gray tennis shoes (no mid- or high-tops)</li>
            </ol>
          </div>
        </div>
      </div>
      {/* <VisitCard /> */}
      <Footer />
    </motion.div>
  );
};

export default Fees;
