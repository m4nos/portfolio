"use client";
import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectCarouselProps {
  images: string[];
  projectTitle: string;
  objectFit?: "cover" | "contain";
}

export default function ProjectCarousel({
  images,
  projectTitle,
  objectFit = "contain",
}: ProjectCarouselProps) {
  return (
    <Box
      sx={{
        height: 200,
        "& .swiper": {
          width: "100%",
          height: "100%",
          borderRadius: 1,
        },
        "& .swiper-slide": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        "& .swiper-button-next, & .swiper-button-prev": {
          color: "primary.main",
          scale: "0.7",
        },
        "& .swiper-pagination-bullet": {
          backgroundColor: "primary.main",
        },
        "& .swiper-pagination-bullet-active": {
          backgroundColor: "secondary.main",
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="project-carousel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={image}
              alt={`${projectTitle} screenshot ${index + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: objectFit,
                backgroundColor: "white",
                borderRadius: 1,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
