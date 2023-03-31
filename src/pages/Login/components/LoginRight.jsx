import React, { useEffect, useState } from 'react'
import loginImg1 from '../../../assets/img/loginImg-1.png'
import loginImg2 from '../../../assets/img/loginImg-2.png'
import loginImg3 from '../../../assets/img/loginImg-3.jpg'

const LoginRight = () => {
    const images = [loginImg1, loginImg2, loginImg3]
    const [selectedImgIndex, setSelectedImgIndex] = useState(0)
    const [selectedImg, setSelectedImg] = useState(images[0])
    const [loaded, setLoaded] = useState(false)
    const [autoplay, setAutoplay] = useState(true)

    const selectNewImg = (index, images, next = true) => {
        setLoaded(false)
        setTimeout(() => {
            const condition = next ? selectedImgIndex < images.length - 1 : selectedImgIndex > 0
            const newIndex = next ? (condition ? selectedImgIndex + 1 : 0) : condition ? selectedImgIndex - 1 : images.length - 1
            setSelectedImg(images[newIndex])
            setSelectedImgIndex(newIndex)
        }, 250)
    }

    useEffect(() => {
        // Precarga de imágenes en segundo plano
        images.forEach(img => {
            const imageObj = new Image();
            imageObj.src = img;
        });
    }, [images]);

    useEffect(() => {
        if(autoplay) {
            const interval = setInterval(() => {
                selectNewImg(selectedImgIndex, images)
            }, 4000)
            return () => clearInterval(interval)
        }
    })
   
  return (
    <section className='hidden lg:block bg-[#F7FAFC] overflow-hidden'>
        <div className='flex flex-col gap-y-2 p-20 pb-12 pr-0 h-screen max-h-screen'>
            <h1 className='font-bold text-2xl'>Empieza a aprender ahora</h1>
            <span className='text-gray-500 text-sm'>Elige tus cursos</span>
            <div className="flex gap-x-2 my-2">
              {images.map((img, index) => (
                <button 
                key={index} 
                onClick={() => selectNewImg(index, images)} 
                className={`h-2 w-2 rounded-full focus:outline-none ${index === selectedImgIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                ></button>
              ))}
            </div>
            <div className='w-full h-full overflow-hidden'>
            <img src={selectedImg} alt="" className={`w-full h-full object-cover opacity-0 transition duration-75 ${loaded && 'opacity-100'}`} onLoad={() => setLoaded(true)} />
            </div>
        </div>
    </section>
  )
}

export default LoginRight
