import Section1 from "../CompenentsEng/Section1"
import AboutUsTr from "../CompenentsTr/AboutUsTr"
import ContactUsTr from "../CompenentsTr/ContactUsTr"
import NavbarTr from "../CompenentsTr/NavbarTr"
import GamesTr from '../CompenentsTr/GamesTr'
import FooterTr from "../CompenentsTr/FooterTr"
function IndexTr() {
    return (
        <div>
            <NavbarTr />
            <Section1 />
            <AboutUsTr />
            <GamesTr />
            <ContactUsTr />
            <FooterTr />
        </div>
    )
}

export default IndexTr