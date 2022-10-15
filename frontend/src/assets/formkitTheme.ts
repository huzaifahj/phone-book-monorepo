const textClassification = {
  inner:
    "border formkit-invalid:border-red-600 rounded-lg mb-1 overflow-hidden transition hover:border-neutral-300 focus-within:!border-neutral-600 flex items-center p-2 gap-2",
  input:
    "w-full border-none placeholder-neutral-400 focus:outline-0 bg-inherit",
}
const boxClassification = {
  fieldset: "border rounded-md px-2 pb-1",
  legend: "font-bold text-sm",
  wrapper: "flex items-center mb-1 cursor-pointer",
  help: "mb-2",
  input:
    "form-check-input appearance-none h-5 w-5 mr-2 border border rounded bg-white checked:bg-green-600 checked:border-none focus:outline-none transition duration-200",
  label: "mt-1 text-sm font-normal",
}
const buttonClassification = {
  wrapper: "mb-1",
  input:
    "bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition",
}

export default {
  global: {
    label: "mb-1 font-semibold",
    outer: "max-w-md mb-5 formkit-disabled:opacity-50",
    help: "text-sm text-gray-600",
    messages: "list-none p-0 mt-1 mb-0",
    message: "text-red-600 mb-1 text-sm",
  },
  button: buttonClassification,
  color: {
    input:
      "w-16 h-8 appearance-none cursor-pointer border border-gray-300 rounded-md mb-2 p-1",
  },
  date: textClassification,
  "datetime-local": textClassification,
  checkbox: boxClassification,
  email: textClassification,
  file: {
    inner: "max-w-md cursor-pointer",
    input:
      "text-sm mb-1 file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm hover:file:bg-neutral-900 hover:file:text-white transition",
    noFiles: "block text-gray-800 text-sm mb-1",
    fileItem: "block flex text-gray-800 text-sm mb-1",
    removeFiles: "ml-auto text-blue-600 text-sm",
  },
  month: textClassification,
  number: textClassification,
  password: textClassification,
  radio: {
    ...boxClassification,
    input: boxClassification.input.replace("rounded", "rounded-full"),
  },
  range: {
    inner: "max-w-md",
    input:
      "form-range appearance-none w-full h-2 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none",
  },
  search: textClassification,
  select: textClassification,
  submit: buttonClassification,
  tel: textClassification,
  text: textClassification,
  textarea: {
    ...textClassification,
    input: textClassification.input + " h-32",
  },
  time: textClassification,
  url: textClassification,
  week: textClassification,
}
