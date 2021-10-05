import React,{useState} from 'react'
import moment from 'moment'

const AdjacentPostCard = ({post,position}) => {
    
    return (
        <>
            <div className="absolute rounded-lg bg-center shadow-md inline-block w-full h-72" style={{backgroundImage : `url('${post.featuredImage.url}')`}}/>
            <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72"/>
            <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                <p className="text-white text-shadow font-semibold text-xs">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                <p className="text-white text-shadow font-semibold text-2xl text-center">{post.title}</p>
            </div>
            <a href={`/post/${post.slug}`} className="cursor-pointer absolute w-full h-full"></a>
            {position == "LEFT" && <div className="absolute bottom-5 bg-pink-600 py-2 px-4 left-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </div>}
            {position == "RIGHT" && <div className="absolute bottom-5 bg-pink-600 py-2 px-4 right-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>}
        </>
    )
}

export default AdjacentPostCard
