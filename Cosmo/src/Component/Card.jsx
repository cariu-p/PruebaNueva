function Image() {
    return (
        <img className="h-50" src="https://phantom-elmundo.uecdn.es/6db4f4bda7250612accfee6977ce5a5b/resize/828/f/webp/assets/multimedia/imagenes/2024/07/03/17200098056317.jpg"></img>
        
    )
}

export default function Card() {
    return (
        <>
            <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                <Image></Image>
                <section className='flex flex-col p-4 w-full h-full text-amber-50  rounded-2xl bg-slate-800'>
                    <b className=" h-9 text-2xl">Marte</b>
                    <p className="h-10">Datos actualizado</p> <br />
                    <p>Diametro:            98717 km</p>
                    <p>Distancia al Sol:    947 millones km</p>
                    <p>Temperatura media:   57°C</p>
                </section>
            </section>

            <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                <img className="h-50" src="https://static.nationalgeographicla.com/files/styles/image_3200/public/30737246885_9722867d14_o.webp?w=760&h=524"/>
                <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                    <b className=" h-full text-2xl">Saturno</b>
                    <p className="h-full">Datos actualizados</p> <br />
                    <p>Diametro:            79931 km</p>
                    <p>Distancia al Sol:    108 millones km</p>
                    <p>Temperatura media:   -17°C</p>
                </section>
            </section>

            <section className="flex flex-col w-90 justify-start rounded-4xl bg-slate-900 ">
                <img className="h-50" src="https://estaticos-cdn.prensaiberica.es/clip/7fdc9c85-96ca-4171-88bf-19b3f57353f0_alta-libre-aspect-ratio_default_0.jpg"/>
                <section className='flex flex-col p-4 w-full h-full text-amber-50 rounded-2xl bg-slate-800'>
                    <b className=" h-9 text-2xl">Jupiter</b>
                    <p className="h-10">Datos actualizados</p> <br />
                    <p>Diametro:            24874 km</p>
                    <p>Distancia al Sol:    675 millones km</p>
                    <p>Temperatura media:   199°C</p>
                </section>
            </section>

          
        </>
    )
}