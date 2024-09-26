import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrderItemTitle } from "../orderItem/OrderItemTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="customerId" source="customerId" />
        <DateTimeInput label="orderDate" source="orderDate" />
        <ReferenceArrayInput source="orderItems" reference="OrderItem">
          <SelectArrayInput
            optionText={OrderItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
