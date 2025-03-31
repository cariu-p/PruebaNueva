function Image() {
    return (
        <img src="https://futuroelectrico.com/wp-content/uploads/2022/09/curiosidades-de-marte.jpg"></img>
    )
}

export default function Card({ txt, }) {
    return (
        <>
            <div className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                <Image></Image>
                <div className='p-4 h-30 w-full text-amber-50  rounded-2xl bg-slate-800'>{txt}
                </div>

            </div>
        </>
    )
}