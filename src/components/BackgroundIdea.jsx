import React from 'react'


function BackgroundIdea({ orientarion, imageLink, problem, title, desc }) {
    if (orientarion == 'left') {
        return <div className="flex z-50">
            <div className="text-white w-5/12">
                <div className={`bg-[url('${imageLink}')] w-full h-[300px] rounded-xl`} />
                <h3 className='font-bold text-xl my-4'>{problem}</h3>
                <p className='w-4/5 font-semibold text-3xl'>{title}</p>
            </div>
            <div className="w-1/12  border-r border-gray-50 flex justify-end">
                <div className="bg-red-500 rounded-full w-10 h-10 right-[calc(100%/2-18px)] absolute" />
            </div>
            <div className="text-white flex justify-center w-5/12">
                <p className='text-xl w-4/5'>
                    {desc}
                </p>
            </div>
        </div>;
    } else {
        return <div className="flex z-50">
            <div className="text-white py-32 w-5/12">
                <p className='text-xl w-4/5'>
                    {desc}
                </p>
            </div>
            <div className="w-1/12  border-r border-gray-50 flex justify-end">
                <div className="bg-red-500 rounded-full w-10 h-10 right-[calc(100%/2-18px)] mt-24 absolute" />
            </div>
            <div className="text-white w-5/12 py-24 pl-16">
                <div className="text-right">
                    <div className={`bg-[url('${imageLink}')] w-full h-[300px] rounded-xl`} />
                    <h3 className='font-bold text-xl my-4'>{problem}</h3>
                    <div className="flex justify-end">
                        <p className='w-4/5 font-semibold text-3xl'>{title}</p>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default BackgroundIdea