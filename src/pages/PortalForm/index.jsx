import { Form, Formik } from "formik";
import CustomInput from "../../components/customInput";
import { advanceSchema } from "../../components/schemas";
import CustomSelect from "../../components/customSelect";
import CustomCheckbox from "../../components/customCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

const PortalForm = () => {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advanceSchema}
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />

            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen üniversitesi seçiniz"
            >
              <option value={""}>Lütfen üniversiteniz seçiniz</option>
              <option value={"boğazici"}>Boğaziç Üniersitesi</option>
              <option value={"gsu"}>Galatasaray Üniersitesi</option>
              <option value={"odtü"}>ODTÜ</option>
              <option value={"itü"}>İTÜ</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">Kaydet</button>
            <Link className="formLink" to={"/"}>Ana Form Git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PortalForm;
