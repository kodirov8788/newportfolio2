import React from 'react'

function Results() {

    const style = {
        result: 'w-full h=[100vh]',
        container: 'm-auto h-full',
        results_main: 'w-full h-[70%] border-[2px] border-black flex py-[50px]',
        results_main__left: "flex-[.25]  h-full text-center px-[50px] border-r-[#d6d6d6] border-r-[1px]",
        h1: "text-[40px] w-[min-content] m-auto text-center uppercase font-bold",
        leftBtn: 'bg-black pt-[5px] pb-[8px] px-[25px] text-[24px] font-bold text-white rounded-[10px] text-center m-auto  tracking-wider mt-[30px]',
        main_right: 'flex-[.75] h-full  bg-red-300',
        main_right_items: '',
        right_items_h1: '',
        right_items_p: '',
    }

    return (
        <div className={style.result}>
            <div className={`container ${style.container}`}>
                <div className={style.results_main}>
                    <div className={style.results_main__left}>
                        <h1 className={style.h1}>   Our results</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex eveniet explicabo mollitia impedit hic consequatur nihil, veritatis, molestias quibusdam exercitationem. Nihil quos incidunt, repellendus ipsum necessitatibus eligendi quisquam in recusandae repellat minima est, tempore adipisci, provident quis odio animi?</p>
                        <button className={style.leftBtn}>Learn more</button>
                    </div>

                    <div className={style.main_right}>
                        <div className={style.main_right_items}>
                            <h1>16x</h1>
                            <p>Greater Website Deployment Capacity for Bacardi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results