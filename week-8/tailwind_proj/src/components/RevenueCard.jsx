import Button from '@mui/material/Button';
export const RevenueCard=({title,orderCount,amount})=>
{
    return <div className="bg-white rounded shadow-md p-2">
           <Button variant="text">Text</Button>
        <div className="text-gray-500 flex">

            
            <div>
            {title}
            </div>
            <div className="m-1 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>

            {/* {showWarning?<div>?</div>:null} */}
            


        </div>
        <div className="flex justify-between ">
            <div className="font-semibold text-2xl">
                ₹ {amount}
            </div>
            
            {orderCount?<div className="flex">
                <div className="text-blue-700 underline cursor-pointer font-semibold ">
                    {orderCount} orders

                </div>
                <div className="mt-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" className="text-blue-700"/>
                    </svg>

                </div>

            </div>:null}
        </div>
    </div>
}