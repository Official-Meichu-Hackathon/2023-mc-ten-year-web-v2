"use client";
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Load, LoadFailed } from '../components/gadgets';
import Questions from '@/app/components/QApage/Question';
import Pagination from '@/app/components/Pagination';
import Filter from '@/app/components/QApage/Filter';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Qna() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [isMobile, setIsMobile] = useState(true); // Default to mobile


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { data, error } = useSWR('/api/qna', fetcher);
  if (error) return <LoadFailed />;
  if (!data) return <Load />;

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const checkBoxNames = [
    {id : 0, name: "2022"},
    {id : 1, name: "創客組"},
    {id : 2, name: "競賽內容"},
    {id : 3, name: "報名相關"},
    {id : 4, name: "其他"}
  ]

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
      <div>
        <header className="flex justify-center mb-5">
          <h1 className="bracket-md text-center">常見問題<br/>Q & A</h1>
        </header>
        <main>
          <Filter checkBoxNames={checkBoxNames} isMobile={isMobile} />
          <div className="mt-5"></div>
          <Questions data={isMobile ? data : currentData} />
          {!isMobile && (<Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={changePage}
          />)}
        </main>
      </div>
  );
}