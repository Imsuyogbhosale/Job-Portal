// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Button } from '../ui/button';

const Catagorycrausal = () => {

    const category = [
        'FrontEnd Developer',
        'Graphic Designer',
        'Backend Developer',
        'FullStack Developer',
        'DevOps Engineer',
        'AI Engineer',
        'FullStack Engineer',
        'Data anyalist',
        'Test Engineer'
    ]
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                                <Button variant='outline' className="bg-gray-800 text-white">{cat}</Button>
                            </CarouselItem>
                        ))
                    }

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default Catagorycrausal;
