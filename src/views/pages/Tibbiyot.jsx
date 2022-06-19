import React from 'react'

export default function Tibbiyot() {
    const image = "/assets/images/oqtosh.jpg"
    const content="Sanatoriyada tashxis qo’yish uchun EKG, ultratovush, spirometriya, klinik va biokimyoviy laboratoriya kabi zamonaviy diagnostika vositalari qo’llaniladi. Terapevtik omil: toza tog’ havosi, tog’ daryolaridan tabiiy gidroizlanish – bularning barchasi dam oluvchilarning o’ziga xos bo’lmagan etiologiyali nafas yo’llari kasalliklari bilan tiklanishiga foydali ta’sir ko’rsatadi. Sog’liqni saqlashni yaxshilash kompleksi: fizioterapiya, lazer terapiyasi, nafas olish, sun’iy vannalar (ignabargli, tuz), tuz g’or, parafin-ozokerit, massaj, mashqlar bilan davolash, sog’liqni saqlash yo’li, muvozanatli ovqatlanish usullarini o’z ichiga oladi. Yotoqxona binosi ikki kishilik va uch kishilik xonalardan iborat bo’lib, yotoqxonalar barcha kerakli jihozlar hamda qulayliklar bilan ta’minlangan. Sanatoriyada kinoteatr bilan klub, kutubxona, sport maydonchasi, sharqiy choyxona va turli savdo shoxobchalari mavjud."

    return (
        <div>
            <img src={image} alt="oqtosh" />
           {content}
        </div>
    )
}
