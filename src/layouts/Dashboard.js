import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from 'semantic-ui-react'


//Layout aslında sabit olan kısımlardır
//.js ve .jsx arasında fark yok ikiside kullanılabilir.
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Categories />
        </Grid.Column>
        <Grid.Column width={12}>
          <ProductList />
        </Grid.Column>
      </Grid>
    </div>
  );
}
