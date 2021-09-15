import React from 'react';
import { createForm } from '@formily/core';
import { FormProvider, FormConsumer, Field } from '@formily/react';
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from '@formily/next';
// import '@formily/next/esm/style.js';

const form = createForm();

const Home = () => {
  return (
    <div>
      <FormProvider form={form}>
        <FormLayout layout="vertical">
          <Field
            name="input"
            title="输入框"
            required
            initialValue="Hello world"
            decorator={[FormItem]}
            component={[Input]}
          />
        </FormLayout>
        <FormConsumer>
          {() => (
            <div
              style={{
                marginBottom: 20,
                padding: 5,
                border: '1px dashed #666',
              }}
            >
              实时响应：{form.values.input}
            </div>
          )}
        </FormConsumer>
        <FormButtonGroup>
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup>
      </FormProvider>
    </div>
  );
};

export default Home;
