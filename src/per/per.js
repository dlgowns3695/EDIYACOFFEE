"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import Swiper styles
import "swiper/css";

import { Parallax, EffectFade, Pagination } from "swiper/modules";


const BigSlideSection = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            const colors = ["#FF5733", "#33B5FF", "#75FF33"]; // 각 슬라이드에 맞는 배경색상
            return `<div class='${className}' style="background-color: ${colors[index]}; width: 80px; height: 80px; border-radius: 50%;"></div>`;
        },
    };

    const slides = [
        { id: 1, imgSrc: "images/main/brand-bg1.jpg", backgroundColor: "#FF5733" },
        { id: 2, imgSrc: "images/main/brand-bg2.jpg", backgroundColor: "#33B5FF" },
        { id: 3, imgSrc: "images/main/brand-bg3.jpg", backgroundColor: "#75FF33" },
    ];

    return (
        <>
            <section>
                
                <Swiper
                    pagination={pagination}
                    modules={[Parallax, EffectFade, Pagination]}
                    effect={"fade"}
                    className="mySwiper"
                    style={{
                        "--swiper-pagination-bottom": "unset",
                        "--swiper-pagination-top": "0",
                        "--swiper-pagination-bullet-horizontal-gap": "2rem",
                    }}
                    onSlideChangeTransitionStart={(swiper) => {
                        swiper.slides.forEach((slide) => {
                            const img = slide.querySelector("img");
                            if (img) {
                                img.style.transform = "scale(1.05)";
                            }
                        });

                        const activeSlideImg =
                            swiper.slides[swiper.activeIndex].querySelector(
                                "img"
                            );
                        if (activeSlideImg) {
                            activeSlideImg.style.transition =
                                "transform 0.3s ease-in";
                            activeSlideImg.style.transform = "scale(1)";
                        }
                    }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            {slide.imgSrc ? (
                                <img
                                    className="w-full scale-105"
                                    style={{ width: "100%" }}
                                    src={slide.imgSrc}
                                    onError={(e) => {
                                        // 이미지 로드 실패 시 배경색 표시
                                        e.target.style.display = "none";
                                        e.target.parentElement.style.backgroundColor = slide.backgroundColor;
                                        e.target.parentElement.style.height = "500px"; // 슬라이드 높이 지정
                                    }}
                                />
                            ) : (
                                <div
                                    className="w-full h-full"
                                    style={{
                                        width: "100%",
                                        height: "500px", // 슬라이드 높이 지정
                                        backgroundColor: slide.backgroundColor,
                                    }}
                                />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default BigSlideSection;
