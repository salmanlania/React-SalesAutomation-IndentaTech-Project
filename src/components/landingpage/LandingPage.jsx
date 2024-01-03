import React from 'react'

// css
import './LandingPage.css'

// images
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/4.png'
import gmail from './images/gmail.png'
import Group1 from './images/Group (1).png'
import Group2 from './images/Group (2).png'
import Group7132 from './images/Group 7132.png'
import Group7133 from './images/Group 7133.png'
import Group7134 from './images/Group 7134.png'
import Group7135 from './images/Group 7135.png'
import Group from './images/Group.png'
import HeartSuit from './images/Heart Suit.png'
import iconOne from './images/icon (1).png'
import iconTwo from './images/icon (2).png'
import icon2 from './images/icon 2.png'
import icon from './images/icon.png'
import icon1 from './images/icon1.png'
import icon4 from './images/icon4.png'
import iconn from './images/iconn.png'
import internet from './images/internet.png'
import Lightbulb from './images/Lightbulb.png'
import linkIn from './images/linkIn.png'
import PencilCircle from './images/Pencil Circle.png'
import profile from './images/profile.png'
import profile1 from './images/profile1.png'
import profile2 from './images/profile2.png'
import review from './images/review.jpeg'
import review1 from './images/review1.jpeg'
import sale from './images/sale.png'
import start from './images/start.png'
import store from './images/store.png'
import store2 from './images/store2.png'
import whatUp from './images/whatUp.png'

import { Outlet } from 'react-router-dom'
export const LandingPage = () => {
    return (
        <>
            <>
                <div className="d-flex home_page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 md-6">
                                <section>
                                    <h1 className="text-white">Lorem Ipsum</h1>
                                    <div className="border1" />
                                    <p>
                                        unknown printer took a galley of type and scrambled it to make a
                                        type specimen book.
                                    </p>
                                    <button className="btn my-2 my-sm-0" type="submit">
                                        LEARN MORE
                                    </button>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_page1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 md-6">
                                <section className="Home_second">
                                    <h1 className="">Make LinkedIn your #1 acquisition channel</h1>
                                    <div className="para">
                                        <p>
                                            Contact your prospects on LinkedIn &amp; Email. Get responses.
                                            Automated and easy. From $0 per month.
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <button className="btn my-2 my-sm-0" type="submit">
                                            Automate your leads strategy free today
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="secontPart">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <section className="Home_second1">
                                        <div className="para1">
                                            <p>
                                                Find clients easily on LinkedIn without any technical skills
                                            </p>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <section className="Home_second">
                                        <div className="card">
                                            <div className="image"></div>
                                            <div className="card-info">
                                                <span>Alice Johnson</span>
                                            </div>
                                            <div className="d-flex">
                                                <p href="#" className="button">
                                                    {" "}
                                                    <span className="bold">1500</span> <br /> Relations
                                                </p>
                                                <p href="#" className="button">
                                                    {" "}
                                                    <span className="bold">60</span> <br />
                                                    Connections
                                                </p>
                                                <p href="#" className="button">
                                                    {" "}
                                                    <span className="bold">856</span> <br />
                                                    Views
                                                </p>
                                            </div>
                                        </div>
                                        <div className="small_card">
                                            <div>
                                                <p>
                                                    4.3{" "}
                                                    <span>
                                                        <img width="50%" src={start} alt="" />
                                                    </span>{" "}
                                                </p>
                                            </div>
                                            <div className="pic">
                                                <img src={profile} width={25} alt="" />
                                                <img src={profile} width={25} alt="" />
                                                <img src={profile1} width={25} alt="" />
                                                <span className="forty">40K</span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="thirtPart">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 md-4">
                                    <div className="rounded_profile">
                                        <div className="center_profile">
                                            <div className="firtPart">
                                                <img src={profile} width={80} alt="" />
                                                <div className="underLine" />
                                                <p>Software Engineer</p>
                                            </div>
                                            <div className="firtPart1">
                                                <img src={profile1} width={80} alt="" />
                                                <div className="underLine1" />
                                                <p>Developer</p>
                                            </div>
                                            <div className="firtPart2">
                                                <img src={profile2} width={80} alt="" />
                                                <div className="underLine1" />
                                                <p>Developer</p>
                                            </div>
                                            <div className="linkIN">
                                                <img src={linkIn} width={80} alt="" />
                                            </div>
                                            <div className="whatUp">
                                                <img src={whatUp} width={80} alt="" />
                                            </div>
                                            <div className="gmail">
                                                <img src={gmail} width={80} alt="" />
                                            </div>
                                            <div className="interNet">
                                                <img src={internet} width={80} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 ">
                                    <div className="sidePara1">
                                        <h2>
                                            Automatically send invitations and messages on LinkedIn &amp;
                                            WhatsApp by creating automated sequences
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fortPart">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div>
                                        <div className="card1">
                                            <div className="card1__content">
                                                <div className="cardTop">
                                                    <div className="cardTop_img">
                                                        <img src={linkIn} width={20} alt="" />
                                                    </div>
                                                </div>
                                                <h2 className="text-center mt-4">LINKEDIN</h2>
                                                <span>
                                                    <p>
                                                        LinkedIn is the world's largest professional network on
                                                        the internet You can use LinkedIn to find the right job or
                                                        internship, connect and strengthen professional
                                                        relationships, and learn the skills you need to succeed in
                                                        your career.
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div>
                                        <div className="card1 card2">
                                            <div className="card1__content">
                                                <div className="cardTop">
                                                    <div className="cardTop_img">
                                                        <img src={whatUp} width={20} alt="" />
                                                    </div>
                                                </div>
                                                <h2 className="text-center mt-4">WHATSAPP</h2>
                                                <span>
                                                    <p>
                                                        WhatsApp's popularity is in part due to it being
                                                        completely free for consumers and substituting SMS and
                                                        phone calls, both paid. That makes it great for keeping in
                                                        touch with family and friends abroad.
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fivePart">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div>
                                        <div className="card1 card3">
                                            <div className="card1__content">
                                                <div className="cardTop">
                                                    <div className="cardTop_img">
                                                        <img src={gmail} width={20} alt="" />
                                                    </div>
                                                </div>
                                                <h2 className="text-center mt-4">EMAIL</h2>
                                                <span>
                                                    <p>
                                                        WhatsApp's popularity is in part due to it being
                                                        completely free for consumers and substituting SMS and
                                                        phone calls, both paid. That makes it great for keeping in
                                                        touch with family and friends abroad.
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div>
                                        <div className="card1 card4">
                                            <div className="card1__content">
                                                <div className="cardTop">
                                                    <div className="cardTop_img">
                                                        <img src={internet} width={20} alt="" />
                                                    </div>
                                                </div>
                                                <h2 className="text-center mt-4">WEB</h2>
                                                <span>
                                                    <p>
                                                        WhatsApp's popularity is in part due to it being
                                                        completely free for consumers and substituting SMS and
                                                        phone calls, both paid. That makes it great for keeping in
                                                        touch with family and friends abroad.
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="specail">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-4">
                                    <h1 className="text-center">OUR SPECIALISATION</h1>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="cardi">
                                        <div className="card1">
                                            <div className="card1__content">
                                                <div className="cardTop1"></div>
                                                <h2 className="mt-4">lorem ipsum</h2>
                                                <span>
                                                    <p>
                                                        {" "}
                                                        Lorem ipsum dolor sitamet, consectetur adipiscing elit.
                                                        Sedurna nisi, aliquam eu cursus eu, commodo ac dolor.
                                                        Nulla.
                                                    </p>
                                                    <div className="btn1 ml-3">I Learn More</div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-3 col-md-6 col-sm-12">
                                    <div className="cardi">
                                        <div className="card1">
                                            <div className="card1__content">
                                                <div className="cardTop2"></div>
                                                <h2 className="mt-4">lorem ipsum</h2>
                                                <span>
                                                    <p>
                                                        {" "}
                                                        Lorem ipsum dolor sitamet, consectetur adipiscing elit.
                                                        Sedurna nisi, aliquam eu cursus eu, commodo ac dolor.
                                                        Nulla.
                                                    </p>
                                                    <div className="btn1 ml-3">I Learn More</div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="cardi">
                                        <div className="card1">
                                            <div className="card1__content">
                                                <div className="cardTop3"></div>
                                                <h2 className="mt-4">lorem ipsum</h2>
                                                <span>
                                                    <p>
                                                        {" "}
                                                        Lorem ipsum dolor sitamet, consectetur adipiscing elit.
                                                        Sedurna nisi, aliquam eu cursus eu, commodo ac dolor.
                                                        Nulla.
                                                    </p>
                                                    <div className="btn1 ml-3">I Learn More</div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="cardi">
                                        <div className="card1">
                                            <div className="card1__content">
                                                <div className="cardTop4"></div>
                                                <h2 className="mt-4">lorem ipsum</h2>
                                                <span>
                                                    <p>
                                                        {" "}
                                                        Lorem ipsum dolor sitamet, consectetur adipiscing elit.
                                                        Sedurna nisi, aliquam eu cursus eu, commodo ac dolor.
                                                        Nulla.
                                                    </p>
                                                    <div className="btn1 ml-3">I Learn More</div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="text-center mb-4">What skills will you get</h1>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill_para d-flex mt-4 ">
                                    <span className="mr-4">
                                        <img src={PencilCircle} width={30} alt="" />
                                    </span>
                                    <span>
                                        <h3>lorem ipsum</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Suspendisseet maximus enim. Ut malesuada tristique quam quis.
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill_para d-flex mt-4 ">
                                    <span className="mr-4">
                                        <img src={Lightbulb} width={30} alt="" />
                                    </span>
                                    <span>
                                        <h3>lorem ipsum</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Suspendisseet maximus enim. Ut malesuada tristique quam quis.
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill_para d-flex mt-4 ">
                                    <span className="mr-4">
                                        <img src={icon4} width={30} alt="" />
                                    </span>
                                    <span>
                                        <h3>lorem ipsum</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Suspendisseet maximus enim. Ut malesuada tristique quam quis.
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill_para d-flex mt-4 ">
                                    <span className="mr-4">
                                        <img src={icon2} width={30} alt="" />
                                    </span>
                                    <span>
                                        <h3>lorem ipsum</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Suspendisseet maximus enim. Ut malesuada tristique quam quis.
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill_para d-flex mt-4 ">
                                    <span className="mr-4">
                                        <img src={iconn} width={30} alt="" />
                                    </span>
                                    <span>
                                        <h3>lorem ipsum</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Suspendisseet maximus enim. Ut malesuada tristique quam quis.
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill_para d-flex mt-4 ">
                                    <span className="mr-4">
                                        <img src={icon1} width={30} alt="" />
                                    </span>
                                    <span>
                                        <h3>lorem ipsum</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Suspendisseet maximus enim. Ut malesuada tristique quam quis.
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="specail mt-4">
                        <div className="container">
                            <div className="row indenta">
                                <div className="col-lg-12">
                                    <h1 className="text-center pt-4 mt-4">Can I use Indenta?</h1>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="img_card">
                                        <img src={sale} alt="" />
                                    </div>
                                    <div>
                                        <h5>Sales / Marketer</h5>
                                        <p>Scale your acquisition. Market your services.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="img_card">
                                        <img src={Group} alt="" />
                                    </div>
                                    <div>
                                        <h5>Founder</h5>
                                        <p>
                                            Expand your network. Generate hundreds of opportunities. Every
                                            week..
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="img_card">
                                        <img src={Group1} alt="" />
                                    </div>
                                    <div>
                                        <h5>Recruiter</h5>
                                        <p>
                                            Expand your candidate pool. Get the word out on your offers.
                                            Recruit the best talent.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="img_card">
                                        <img src={Group2} alt="" />
                                    </div>
                                    <div>
                                        <h5>Freelance</h5>
                                        <p>
                                            Fill your calendar. No technical skills needed. In just 10
                                            mins/day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="customer_reveiw">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 d-flex align-items-center justify-content-center m-auto ">
                                    <h2 className="text-center mt-4">Customer Reviews</h2>
                                    <span className="mt-4 ml-2">
                                        <img src={HeartSuit} width={30} alt="" />
                                    </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 md-5">
                                    <div className="review_card">
                                        <div className="review_card_content">
                                            <img src={review} width={40} alt="" />
                                            <div className="d-flex">
                                                <h6>
                                                    John Alice <br /> <span> Product Architect </span>{" "}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="para">
                                            <p>
                                                Lorem ipsum dolor sit amet, consec tetur dipiscing elit.
                                                Nullam eget consectetur metus. Ut semper pretium orci quis
                                                porta. Etiam aliquam rutrum lectus, nec facilisis
                                                nibhconsectetureget.Sed sollici tudin sodales risus eget
                                                dictum. Maecenas sit amet justo ac magna tempus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 md-4">
                                    <div className="review_card img_bottom">
                                        <div className="review_card_content ">
                                            <img src={profile2} width={40} alt="" />
                                            <div className="d-flex">
                                                <h6>
                                                    Nawal
                                                    <br /> <span> Engineer </span>{" "}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="para">
                                            <p>
                                                Lorem ipsum dolor sit amet, consec tetur dipiscing elit.
                                                Nullam eget consectetur metus. Ut semper pretium orci quis
                                                porta. Etiam aliquam rutrum lectus, nec facilisis
                                                nibhconsectetureget.Sed sollici tudin sodales risus eget
                                                dictum. Maecenas sit amet justo ac magna tempus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 md-4">
                                    <div className="review_card">
                                        <div className="review_card_content">
                                            <img src={review1} width={40} alt="" />
                                            <div className="d-flex">
                                                <h6>
                                                    Elizabeth
                                                    <br /> <span> Founder at Abc </span>{" "}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="para">
                                            <p>
                                                Lorem ipsum dolor sit amet, consec tetur dipiscing elit.
                                                Nullam eget consectetur metus. Ut semper pretium orci quis
                                                porta. Etiam aliquam rutrum lectus, nec facilisis
                                                nibhconsectetureget.Sed sollici tudin sodales risus eget
                                                dictum. Maecenas sit amet justo ac magna tempus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 md-4">
                                    <div className="review_card img_bottom">
                                        <div className="review_card_content ">
                                            <img src={profile2} width={40} alt="" />
                                            <div className="d-flex">
                                                <h6>
                                                    Sara Ali
                                                    <br /> <span> Freeelance Designer </span>{" "}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="para">
                                            <p>
                                                Lorem ipsum dolor sit amet, consec tetur dipiscing elit.
                                                Nullam eget consectetur metus. Ut semper pretium orci quis
                                                porta. Etiam aliquam rutrum lectus, nec facilisis
                                                nibhconsectetureget.Sed sollici tudin sodales risus eget
                                                dictum. Maecenas sit amet justo ac magna tempus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="last1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1>WHY CHOOSE US</h1>
                                </div>
                                <div className="col-lg-5">
                                    <div className="list">
                                        <div className="">
                                            <img src={one} width={50} alt="" />
                                        </div>
                                        <div>
                                            <h5>12 years of experience</h5>
                                            <p>
                                                Neque porro quisquam est qui dolorem ipsum quia dolor sit
                                                amet, consectetur, adipisci velit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <span class="col-lg-2"> */}
                                <span className="line" />
                                {/* </span> */}
                                <div className="col-lg-5">
                                    <div className="list">
                                        <div className="">
                                            <img src={two} width={50} alt="" />
                                        </div>
                                        <div>
                                            <h5>best industry expert</h5>
                                            <p>
                                                Neque porro quisquam est qui dolorem ipsum quia dolor sit
                                                amet, consectetur, adipisci velit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="list">
                                            <div className="">
                                                <img src={three} width={50} alt="" />
                                            </div>
                                            <div>
                                                <h5>Fast &amp; effective solutions</h5>
                                                <p>
                                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                                                    amet, consectetur, adipisci velit
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="line" />
                                    <div className="col-lg-5 ">
                                        <div className="list">
                                            <div className="">
                                                <img src={four} width={50} alt="" />
                                            </div>
                                            <div>
                                                <h5>Flexible pricing</h5>
                                                <p>
                                                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                                                    amet, consectetur, adipisci velit
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<Footer>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className="footer">
                    <div className="container">
                        <div className="row footer_part d-flex justify-content-between flex-wrap">
                            <div className="col-md-8">
                                <div>
                                    <img src={store} width={90} alt="" />
                                    <img src={store2} width={90} alt="" />
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-between ">
                                <h5 className="mt-3 mr-2 text-bold">Contact Us</h5>
                                <div className="icone">
                                    <div>
                                        <img src={icon} width={15} alt="" />
                                        <p className="d-inline">abcxyz@brand.com</p>
                                    </div>
                                    <div>
                                        <img src={iconOne} width={15} alt="" />
                                        <p className="d-inline">Pakistan</p>
                                    </div>
                                    <div>
                                        <img src={iconTwo} width={15} alt="" />
                                        <p className="d-inline">+92 335 302-9722</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer1">
                    <div className="container">
                        <div className="row footer_part">
                            {/* <div> */}
                            <div className="mt-4">
                                <p>© 2023 All Rights Reserved</p>
                            </div>
                            <div className="itemList">
                                <ul className="d-flex m-4">
                                    <li>Privacy Policy</li>
                                    <li>Terms of Use</li>
                                    <li>Sales and Refunds</li>
                                    <li>Legal</li>
                                    <li>Site Map</li>
                                </ul>
                            </div>
                            <div className="">
                                <p className="d-inline ">Follow Us</p>
                            </div>
                            <div>
                                <img src={Group7132} width={30} alt="" />
                                <img src={Group7133} width={30} alt="" />
                                <img src={Group7134} width={30} alt="" />
                                <img src={Group7135} width={30} alt="" />
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<Footer end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<Closed Home Content>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            </>

        </>
    )
}
