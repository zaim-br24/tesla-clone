import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title="Model S" 
            description="Order Online for Touchless Delivery."
            leftBtnText="custom order"
            rightBtnText="existing inventory"
            backgroundIamge="model-s.jpg"
        />
         <Section 
            title="Model Y" 
            description="Order Online for Touchless Delivery."
            leftBtnText="custom order"
            rightBtnText="existing inventory"
            backgroundIamge="model-y.jpg"
        />
        <Section 
            title="Model 3" 
            description="Order Online for Touchless Delivery."
            leftBtnText="custom order"
            rightBtnText="existing inventory"
            backgroundIamge="model-3.jpg"
        />
         <Section 
            title="Model x" 
            description="Order Online for Touchless Delivery."
            leftBtnText="custom order"
            rightBtnText="existing inventory"
            backgroundIamge="model-x.jpg"
        />
        <Section 
            title="Solar Panels" 
            description="Lowest Cost Solar Panels in America."
            leftBtnText="order now"
            rightBtnText="learn more"
            backgroundIamge="solar-panel.jpg"
        />
        <Section 
            title="Solar Roof" 
            description="Produce Clean Energy From Your Roof."
            leftBtnText="order now"
            rightBtnText="learn more"
            backgroundIamge="solar-roof.jpg"
        />
        <Section 
            title="Accessories" 
            description=""
            leftBtnText="shop now"
            backgroundIamge="accessories.jpg"
        />
       
    </Container>
  )
}

export default Home

const Container = styled.div`
  height:100vh;
`