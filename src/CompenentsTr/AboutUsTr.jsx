import React from 'react'

function AboutUsTr() {
    return (
        <div className="py-16 px-8 text-center" style={{ backgroundColor: "RGB(58, 15, 120)" }}>
            <section id='abouttr'>
                <h2 className="text-4xl font-[1000] text-[rgb(245,230,200)]">Biz Kimiz?</h2>
                <p className="mt-4 text-lg text-[rgb(245,230,200)] max-w-3xl mx-auto">
                    Biz, yenilikçi ve yüksek kaliteli çözümler sunmaya odaklanmış özverili bir ekibiz. Misyonumuz, teknoloji ve tasarım aracılığıyla anlamlı deneyimler yaratmaktır..
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="p-6 rounded-lg shadow-md border border-[rgb(245,230,200,0.5)]"
                        style={{ backgroundColor: "rgb(245,230,200,0.2)" }}>
                        <h3 className="text-2xl font-semibold text-[rgb(245,230,200)]">Misyonumuz</h3>
                        <p className="mt-2 text-[rgb(245,230,200)]">
                            Yeniliğin sınırlarını zorlamak ve günlük yaşamı geliştiren etkili çözümler sunmak.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg shadow-md border border-[rgb(245,230,200,0.5)]"
                        style={{ backgroundColor: "rgb(245,230,200,0.2)" }}>
                        <h3 className="text-2xl font-semibold text-[rgb(245,230,200)]">Vizyonumuz</h3>
                        <p className="mt-2 text-[rgb(245,230,200)]">
                            Teknoloji ve yaratıcılık alanında lider olmak, çalışmalarımızla dünyada fark yaratmak.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsTr