import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'

export default function BizHaqimizda() {
    const image = "/assets/images/oqtosh.jpg"
    const content = "OQTOSH\" SANATORIYSI - Toshkent viloyati Bo'stonliq tumani Oqtosh qishlog'ida Tyan Shan tog'larining G'arbiy tumanida joylashgan. Toshkent shahridan 65 km uzoqlikda, dengiz sathidan 1140 m balandlikda joylashgan (G'arbiy Tyanshan — Qorjontovning pastki qismi). Sanatoriya hududida dastlab geologlar yashab tog' qidiruv ishlarini olib borishgan. 1936-yil silga aloqasi boʻlmagan nafas aʼzolari hamda nerv sistemasi kasalliklari bilan og'rigan kishilar davolanadigan sanatoriya tashkil etilgan. 1942—45 yillar sanatoriya koʻkrak qafasi jarohatlanganlar uchun harbiy gospital boʻlgan. Hozirda nafas aʼzolari kasalliklari, asosan, bronxial astma bilan ogʻrigan bemorlar davolanadi. Sanatoriy yaxshi koʻkalamzorlashtirilgan, atrofi keng bargli oʻrmonlar bilan oʻralgan (yongʻoq, pista, bodom va boshqalar oʻsadi). Iqlimi moʻtadil kontinental: qishi yumshoq, yozi issiq, yanvarning oʻrtacha temperaturasi —2°, iyulniki 35°, nisbiy namlik 55%, quyoshli kunlar davomiyligi yiliga 2550 soat. Davolash omili — kislorodga va shifobaxsh efir moylariga boy musaffo togʻ havosi. Togʻ daryolaridan keladigan tabiiy gidro ionlanish kelib chiqishi jihatidan nospetsifik nafas aʼzolari xastaliklariga shifobaxsh taʼsir etadi. Davolash kompleksi fizioterapiya, sunʼiy vannalar (ignabargli, tuzli), sauna, parafin va ozokerit bilan davolash, massaj, davo fizkulturasi, terrenkur, maqsadga muvofiq ovqatlanishdan iborat. Sanatoriyda sharq tabobati — giyoxlar bilan davolashda keng foydalaniladi. 100 (yozda 126) oʻringa moʻljallangan yotoq korpuslari (bir va ikki oʻrinli), 4 ta oilaviy kottej, klub, kutubxona, sport maydonchalari mavjud. Bolalar va ota-onalari uchun yil boʻyi ishlaydigan boʻlim ham bor (1999-yildan). Sanatoriyning kirish darvozasi ark uslubida qurilgan."

    return (
        <motion.div layoutId='/biz-haqimizda' transition={{duration: 0.5}}>
            <img src={image} alt="oqtosh"/>
            {content}
        </motion.div>
    )
}
