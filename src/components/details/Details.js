import React from 'react'
import { BsLightbulb } from "react-icons/bs"
import { Link } from 'react-router-dom'
import Icons1 from "../../images/icons/1.png"
import Icons2 from "../../images/icons/2.png"
import Icons3 from "../../images/icons/3.png"
import Icons4 from "../../images/icons/4.png"
import Icons5 from "../../images/icons/5.png"


function Details() {
    const style = {
        details: 'w-full h-[40vh] text-white flex',
        box: 'cursor-pointer grid place-items-center w-1/5 bg-[#263852] h-full aspect-[1.5/2] group relative overflow-hidden',
        Link: 'h-full absolute flex flex-col w-full p-[5%] text-center bg-[#ffc001] translate-y-[-500px] group-hover:translate-y-0 duration-[0.5s] last:bg-black',
        Link2: 'h-full absolute flex flex-col w-full p-[5%] text-center bg-[#ccc] translate-y-[-500px] group-hover:translate-y-0 duration-[0.5s] last:bg-black',
        h2: 'm-[20px] tracking-wide font-bold text-[24px]',
        p: 'text-[16px]',
        inbox: 'text-[50px] flex flex-col items-center -text-[30px]',
        icon: 'mb-[30px] w-[100px] ',
        inbox_h1: 'text-[26px] tracking-[4px] font-bold'


    }

    const DetailsData = [
        {
            id: 1,
            title: "Engineer",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quos inventore ullam rerum, facilis consequatur distinctio doloremque quibusdam sit vel libero accusamus maxime sunt reprehenderit. Molestias!",
            icon: Icons1,
            subTitle: "CONSALT"
        },
        {
            id: 2,
            title: "Engineer",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quos inventore ullam rerum, facilis consequatur distinctio doloremque quibusdam sit vel libero accusamus maxime sunt reprehenderit. Molestias!",
            icon: Icons2,
            subTitle: "DESIGN"
        },
        {
            id: 3,
            title: "Engineer",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quos inventore ullam rerum, facilis consequatur distinctio doloremque quibusdam sit vel libero accusamus maxime sunt reprehenderit. Molestias!",
            icon: Icons3,
            subTitle: "ENGINEER"
        },
        {
            id: 4,
            title: "Engineer",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quos inventore ullam rerum, facilis consequatur distinctio doloremque quibusdam sit vel libero accusamus maxime sunt reprehenderit. Molestias!",
            icon: Icons4,
            subTitle: "OPERATE"
        },
        {
            id: 5,
            title: "Engineer",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quos inventore ullam rerum, facilis consequatur distinctio doloremque quibusdam sit vel libero accusamus maxime sunt reprehenderit. Molestias!",
            icon: Icons5,
            subTitle: "OPTIMIZE"
        },
    ]

    console.log(DetailsData);
    return (
        <div className={style.details} >
            {DetailsData.map(data => (
                <div className={style.box} key={data.id}>
                    <Link className={data.id <= 2 ? style.Link : style.Link2} to={'/www'}>
                        <h2 className={style.h2}>{data.title}</h2>
                        <p className={style.p}>{data.text}</p>
                    </Link>
                    <div className={style.inbox}>
                        {<img src={data.icon} className={style.icon} alt="" />}
                        <h1 className={style.inbox_h1}>{data.subTitle}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details