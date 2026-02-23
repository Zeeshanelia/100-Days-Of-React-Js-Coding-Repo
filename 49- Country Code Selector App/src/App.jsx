import { Card, Input, Select, Form, Button } from "antd";
import { useState } from "react";
import { countries } from "country-codes-flags-phone-codes";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const getValue = (values) => {
    const payload = {
      mobile: `${values.countryCode}${values.mobile}`
    };

    setSubmittedData(payload); // store in state
  };

  return (
    <div className="min-h-screen bg-gray-200 py-5">
      <section className="mx-auto w-5/12 py-10">
        <Card>
          <h1 className="text-2xl mb-6 font-bold text-green-500">country code selector app</h1>

          <Form
            layout="vertical"
            onFinish={getValue}
            initialValues={{ countryCode: "+92" }}
          >
            <Form.Item label="Mobile" required>
              <Input.Group compact>

                <Form.Item name="countryCode" noStyle>
                  <Select style={{ width: "30%" }} showSearch>
                    {countries.map((country, index) => (
                      <Select.Option
                        key={index}
                        value={country.phoneCode}
                      >
                        {country.name} ({country.phoneCode})
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="mobile"
                  noStyle
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{ width: "70%" }}
                    placeholder="31499002234"
                  />
                </Form.Item>

              </Input.Group>
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary" block>
                Submit
              </Button>
            </Form.Item>
          </Form>

          {/* 👇 Render Payload on Screen */}
          {submittedData && (
            <div className="mt-6 p-4 bg-green-100 rounded">
              <h2 className="font-bold">Submitted Data:</h2>
              <p>{submittedData.mobile}</p>
            </div>
          )}
        </Card>
      </section>
    </div>
  );
}

export default App;
