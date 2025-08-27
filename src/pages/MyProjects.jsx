import React, { useState, useEffect } from 'react';

const CardCarousel = ({ images, autoplayDelay = 4000, showPagination = true, showNavigation = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (autoplayDelay) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, autoplayDelay);

            return () => clearInterval(timer);
        }
    }, [autoplayDelay, images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">

            <div className="relative h-48 sm:h-72 md:h-80 lg:h-full  overflow-hidden rounded-xl shadow-lg">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0 flex justify-center">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-contain sm:object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>


            {showNavigation && (
                <>
                    <div
                        onClick={goToPrevious}
                        className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/60 hover:bg-gray-800/80 text-white p-1 sm:p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110 "
                        aria-label="Previous slide"
                    >
                        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div
                        onClick={goToNext}
                        className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/60 hover:bg-gray-800/80 text-white p-1 sm:p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110"
                        aria-label="Next slide"
                    >
                        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </>
            )}


            {showPagination && (
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${currentIndex === index ? 'bg-gray-100 scale-125' : 'bg-gray-400/50 hover:bg-gray-400/80'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const CardCarouselDemo = () => {
    const images = [
        { src: "/projects/p11.png", alt: "Project 1" },
        { src: "/projects/p11.png", alt: "Project 2" },
        { src: "/projects/p11.png", alt: "Project 3" },
    ];

    return (
        <div className="w-full sm: min-h-screen h-100 flex items-center justify-center">
            <CardCarousel
                images={images}
                autoplayDelay={4000}
                showPagination={true}
                showNavigation={true}
            />
        </div>
    );
};

export default CardCarouselDemo;