import React, { useState, useEffect } from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from '@chakra-ui/react'

import { data } from '../../../data/ModeloFichaTreino'
import { Input } from '@chakra-ui/react'

interface Exercise {
  exercicio_descricao: string
}

const { innerWidth: width, innerHeight: height } = window;

const Exercises: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [exercises, setExercises] = useState<Array<Exercise>>([])

  useEffect(() => {
    setExercises(data.exercicio)
  }, [])

  const filterData = (text: string) => {
    setSearchText(text)
    var filter = data.exercicio.filter((item: Exercise) =>
      item.exercicio_descricao.toLowerCase().includes(text.toLowerCase())
    );

    setExercises(filter)
  };

  return (
    <Box>
      <Input
        value={searchText}
        onChange={event => filterData(event.target.value)}
        placeholder="Pesquisar exercicios"
        w={'500px'}
        mb={'50px'}
      />
      <TableContainer overflowY='scroll' maxH={innerHeight / 2 + 200}>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Descrição</Th>
            </Tr>
          </Thead>
          <Tbody>
            {exercises.map((el, index) => (
              <Tr key={index}>
                <Td>
                  {el.exercicio_descricao}
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Exercises;