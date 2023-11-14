export default function BlogListSkeleton(props: {num: number}) {
    return (
        Array(props.num).fill(0).map((el, index) => (
            <div>
                <div className='my-4 flex flex-col bg-light-800 w-full gap-2 p-2 rounded'>
                    <div className='bg-light-700 w-full h-48 animate-pulse'></div>
                    <div className='flex flex-col gap-2 w-9/12'>
                        <span className='w-11/12 bg-light-700 h-8 rounded-full animate-pulse'></span>
                        <span className='w-9/12 bg-light-700 h-2 rounded-full animate-pulse'></span>
                        <span className='w-9/12 bg-light-700 h-2 rounded-full animate-pulse'></span>
                    </div>
                </div>
            </div>
        ))
    )

}