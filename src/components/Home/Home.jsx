import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Recepie from '../Recepie/Recepie';
import AddBlog from '../Blog/Blog';
import RecipeContextProvider from '../context/RecepieContext';




export default function Home() {



    const {recepie ,setRecepie} = useContext(RecipeContextProvider)




console.log("recepie in header" , recepie)


    return (
        <>   
        
         <div className="mx-auto w-full max-w-7xl">
             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                     <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                         <h2 className="text-4xl font-bold sm:text-5xl">
                             Your Daily Dish 
                             <span className="hidden sm:block text-4xl">A Food Journy</span>
                         </h2>

                       
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://img.freepik.com/free-photo/delicious-traditional-tacos-arrangement_23-2150799549.jpg?t=st=1729030220~exp=1729033820~hmac=2013ff0674c3c6701a82bbac7aa47a2f561c02633cc5cd685bd36ac4aa1ff326&w=740" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://img.freepik.com/free-photo/high-angle-tacos-lime-plate_23-2148629354.jpg?t=st=1729030266~exp=1729033866~hmac=48a8c79b35d4f3361837295de6452113ae93173db35b2f0cb9cd6529abe033ff&w=740" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Share your Recepies</h1>
        </div>
        <Recepie/>
        <AddBlog />
        </>
     
    );
}
















