import React from "react";
import CartSummary from "./CartSummary";
import { Button, Menu, Container } from "semantic-ui-react";

//inverted -> normal boyut demek
//fixed -> sabitleme 
//container -> sağdan ve soldan boşluk bırakmamızı sağlar
export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
           
            <CartSummary />
            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>

      
    </div>
  );
}
