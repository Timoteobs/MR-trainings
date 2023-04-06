import React, { useEffect, useState } from 'react';

import { Card, CardHeader, CardBody, CardFooter, Text, Box } from '@chakra-ui/react'
import { data } from '../../../data/ModeloFichaTreino'
import { data as Feminino } from '../../../data/Fichas'
import { data as Masculino } from '../../../data/FichasMaculino'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const { innerWidth: width, innerHeight: height } = window;

const ExampleCards: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [cards, setCards] = useState<Array<any>>([]);
  const [feminine, setFeminine] = useState<Array<any>>([]);
  const [masculine, setMasculine] = useState<Array<any>>([]);
  const [dataVisible, setDataVisile] = useState<Array<any>>([])

  useEffect(() => {
    var itens = groupByItem(data.modelo_ficha, 'ficha_descricao')
    var itensFeminine = groupByItem(Feminino, 'ficha_descricao')
    var itensMasculine = groupByItem(Masculino, 'ficha_descricao')
    setCards(itens)
    setFeminine(itensFeminine)
    setMasculine(itensMasculine)
  }, [])



  const groupByItem = (array, key) => {
    const grouped = {}

    array.forEach((item) => {
      const date = item[key]
      if (!grouped[date]) {
        grouped[date] = []
      }
      grouped[date].push(item)
    })

    return Object.entries(grouped).map(([title, items]) => ({
      title,
      items: removeDuplicates(items, 'exercicio_descricao')
    }))
  }

  const removeDuplicates = (arr, key) => {
    return arr.filter((obj, index, self) => {
      return index === self.findIndex((t) => (
        t[key] === obj[key]
      ));
    });
  }

  const onpenDialog = (data, key) => {
    var _data = groupByItem(data, key)
    console.log(_data)
    setDataVisile(_data)
    onOpen()
  }

  return (
    <Box>
      <Text
        fontSize='5xl'
        mb={'20px'}
      >
        Modelo de fichas
      </Text>
      <Tabs variant='enclosed'>
        <TabList>
          <Tab>Fichas inicias</Tab>
          <Tab>Feminino</Tab>
          <Tab>Masculino</Tab>
        </TabList>
        <TabPanels >
          <TabPanel w={'100%'} display='flex' flexDirection='row' flexWrap='wrap'>
            {cards.map((el, index) => (
              <Card as='button' key={index} width={'300px'} ml={'30px'} mb={'30px'} onClick={() => onpenDialog(el.items, 'exercicio_divisao')}>
                <CardBody>
                  <Text>{el.title}</Text>
                </CardBody>
              </Card>
            ))}
          </TabPanel>
          <TabPanel w={'100%'} display='flex' flexDirection='row' flexWrap='wrap'>
            {feminine.map((el, index) => (
              <Card key={index} width={'300px'} ml={'30px'} mb={'30px'} as='button' onClick={() => onpenDialog(el.items, 'exercicio_treino')}>
                <CardBody>
                  <Text>{el.title}</Text>
                </CardBody>
              </Card>
            ))}
          </TabPanel>
          <TabPanel w={'100%'} display='flex' flexDirection='row' flexWrap='wrap'>
            {masculine.map((el, index) => (
              <Card key={index} width={'300px'} ml={'30px'} mb={'30px'} as='button' onClick={() => onpenDialog(el.items, 'exercicio_treino')}>
                <CardBody>
                  <Text>{el.title}</Text>
                </CardBody>
              </Card>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Modal isOpen={isOpen} onClose={onClose} size='6xl' scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Accordion allowMultiple>
              {dataVisible.map((el, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        {el.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <TableContainer>
                      <Table size='sm'>
                        <Thead>
                          <Tr>
                            <Th>Descrição</Th>
                            <Th>Repetição</Th>
                            <Th>Ordem</Th>
                            <Th>Serie</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {el.items.map((el) => (
                            <>
                              <Tr>
                                <Td>
                                  {el.exercicio_descricao}
                                </Td>
                                <Td>
                                  {el.exercicio_repeticao}
                                </Td>
                                <Td>
                                  {el.exercicio_ordem}
                                </Td>
                                <Td>
                                  {el.exercicio_serie}
                                </Td>
                              </Tr>
                            </>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
};


export default ExampleCards;