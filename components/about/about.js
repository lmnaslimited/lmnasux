import Image from "next/image"
import Container from "../container"
import Aboutcard from "./aboutcard"
export default function abouts({ abouts}) {
    return ( 
        <Container>
             <Aboutcard key={abouts[0].title} src={abouts[0].image} title={abouts[0].title}  subTitle={abouts[0].subTitle} />
        </Container>
    )
}