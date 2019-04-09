Como usar o fxLayout
====================

1. Primeiro você tem que instalar o flex-layout pelo node

```npm install @angular/flex-layout @angular/cdk```

2. Fazer o import do módulo FlexLaout no projeto. Você pode fazer isso no **app/core/core.module.ts** 
```import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  ...
  imports: [
    ...
    FlexLayoutModule,
    ...
  ],

```

3. Colocar no template do componente o código html **(o parametro style é só para destacar cada div)**

```
<div fxLayout="column" fxFill>
  <div fxLayout fxFlex>
    <div class="one" fxFlex="20" fxLayoutAlign="center center" style="background-color: aliceblue;">lado com 20%</div>
    <div class="two" fxFlex="80" fxLayoutAlign="center center" style="background-color: antiquewhite;">lado com 80%</div>
  </div>
</div>
```
