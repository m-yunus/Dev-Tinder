"use client";

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import CreateAccountHeader from '@/Components/create-account/Header';
import Footer from '@/Components/layout/Footer';
import { Button } from '@/Components/ui/button';
import { FormField, FormControl } from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Checkbox } from '@/Components/ui/checkbox';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CreateAccountPage = () => {
  const router = useRouter();
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data, "Form Data Submitted");
    router.push('/portal/recs'); // Navigate after successful submission
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
                {/* Left Side Form Fields */}
                <div className="flex flex-col w-max md:w-1/2">
                  <div className="mb-4 flex flex-col">
                    <label className="text-white mb-4">First Name</label>
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
                    <label className="text-white mb-4">Email</label>
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
                    <label className="text-white mb-4">Birthday</label>
                    <FormControl>
                      <Input
                        {...methods.register('birthday')}
                        type="date"
                        placeholder="Birthday"
                        style={{ backgroundColor: 'black', border: '1px solid #3a3939' }}
                        className="w-full p-2 text-white"
                      />
                    </FormControl>
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="text-white mb-4">Gender</label>
                    <Select
                      onValueChange={(value) => methods.setValue('gender', value)}
                      style={{ backgroundColor: 'black', border: '1px solid #3a3939' }}
                    >
                      <SelectTrigger
                        style={{ backgroundColor: 'black', border: '1px solid #3a3939', color: 'white' }}
                        className="w-[180px]"
                      >
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select Gender</SelectLabel>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2 mt-4">
                    <Checkbox
                      id="terms"
                      {...methods.register('showCompany')}
                      style={{ backgroundColor: 'black', border: '1px solid #3a3939' }}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Show My Current Company in My Profile
                    </label>
                  </div>
                </div>
                {/* Right Side Placeholder (Add fields if needed) */}
                <div className="flex flex-col w-max md:w-1/2"></div>
              </div>
              {/* Submit Button */}
              <div className="w-full flex justify-center">
                <Button
                  type="submit"
                  className="bg-[#fd3f71] w-[90%] md:w-[30%] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Continue
                </Button>
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
