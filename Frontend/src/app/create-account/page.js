// src/app/create-account/page.js
"use client";
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import CreateAccountHeader from '@/Components/create-account/Header';
import Footer from '@/Components/layout/Footer';
import { Button } from '@/Components/ui/button';
import { FormField, FormLabel, FormControl } from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Checkbox } from '@/Components/ui/checkbox';

const CreateAccountPage = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data,"fd");
    // Handle form submission here
  };

  return (
    <>
      <CreateAccountHeader />
      <div className="flex justify-center items-center bg-black py-8">
        <div className="rounded-lg p-8 w-full md:max-w-[60%] flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 mt-16 text-center text-white">Create Account</h2>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="flex w-full gap-4 mb-4">
                <div className="flex flex-col w-1/2">
                  <div className="mb-4 flex flex-col ">
                    <FormLabel className="text-white mb-4">First Name</FormLabel>
                    <FormControl>
                      <Input
                        {...methods.register('firstName')}
                        placeholder="First Name"
                        style={{ backgroundColor: 'black', border: '1px solid #3a3939' }}
                        className="w-full p-2 text-white"
                      />
                    </FormControl>
                  </div>
                  <div className="flex flex-col mb-4">
                    <FormLabel className="text-white mb-4">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...methods.register('email')}
                        type="email"
                        placeholder="Email"
                        style={{ backgroundColor: 'black', border: '1px solid #3a3939' }}
                        className="w-full p-2 text-white"
                      />
                    </FormControl>
                  </div>
                  <div className="flex flex-col mb-4">
                    <FormLabel className="text-white mb-4">Birthday</FormLabel>
                    <FormControl>
                      <Input
                        {...methods.register('email')}
                        type="email"
                        placeholder="Birthday"
                        style={{ backgroundColor: 'black', border: '1px solid #3a3939' }}
                        className="w-full p-2 text-white"
                      />
                      
                    </FormControl>
                  </div>
                  <div className="flex flex-col mb-4">
                    <FormLabel className="text-white mb-4">Gender</FormLabel>
                    <Select style={{ backgroundColor: 'black', border: '1px solid #3a3939' }}>
      <SelectTrigger style={{ backgroundColor: 'black', border: '1px solid #3a3939',color:'white' }} className="w-[180px]">
        <SelectValue placeholder="Select Gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Gender</SelectLabel>
          <SelectItem value="apple">male</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
     <div className="flex items-center space-x-2 mt-4">
      <Checkbox id="terms"  style={{ backgroundColor: 'black', border: '1px solid #3a3939' }}/>
      <label
        htmlFor="terms"
        className="text-sm  text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
      Show My current Company in My Profile
      </label>
    </div>
                  </div>
                  {/* Add more form fields as needed */}
                </div>
              </div>
             
            </form>
          </FormProvider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateAccountPage;
