import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="max-w-[90%] mx-[5%] my-[2%] pr-[20px] p-[25px] bg-[#272727] rounded-[40px] shadow-md">
        <div className="">
          <h1 className="text-[40px] text-[#4444fc] font-arial">Contact</h1>
          <hr className="w-40 border-t-4 border-[#4444fc]"/>
          <ul className="m-10">
            <li>
              <a href="https://youtube.com/@AndresMauricioG" target="_blank">
                <img className="w-20 h-20 hover:opacity-[0.5]" src="/images/yt.png" alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/AndresMauricioG" target="_blank">
                <img className="w-20 h-20 hover:opacity-[0.5]" src="/images/dc.png" alt="Discord" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/AndresMauricioG" target="_blank">
                <img className="w-20 h-20 hover:opacity-[0.5]" src="/images/wsp.png" alt="WhatsApp" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AndresMauricioG" target="_blank">
                <img className="w-20 h-20 hover:opacity-[0.5]" src="/images/twt.png" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/AndresMauricioG" target="_blank">
                <img className="w-25 h-20 hover:opacity-[0.5]" src="/images/fb.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/AndresMauricioG" target="_blank">
                <img className="w-20 h-20 hover:opacity-[0.5]" src="/images/ig.png" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Contact;
