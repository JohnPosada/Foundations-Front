import { InputText } from "../../common/interfaces/inputText.interface";

export const textFieldsNewFoundation: InputText[] = [
  {
    name: "identification",
    type: "text",
    label: "Identificación",
    placeholder: "Identificación",
  },
  {
    name: "name",
    type: "text",
    label: "Nombre",
    placeholder: "Nombre de la fundación",
  },
  {
    name: "address",
    type: "text",
    label: "Dirección",
    placeholder: "Dirección de la fundación",
  },
  {
    name: "phone",
    type: "text",
    label: "Teléfono",
    placeholder: "Teléfono de la fundación",
  },
  {
    name: "email",
    type: "email",
    label: "E-mail",
    placeholder: "E-mail de la fundación",
  },
  {
    name: "logo",
    type: "file",
    label: "Logo",
    placeholder: "Logo de la fundación",
  },
];
