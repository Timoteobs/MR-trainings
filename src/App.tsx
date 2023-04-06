
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Flex
} from '@chakra-ui/react'
import { FiList, FiBook, FiUsers, FiClipboard } from "react-icons/fi";
import { Icon } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const { innerWidth: width, innerHeight: height } = window;

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      ml={'100px'}
      mr={'100px'}
    >
      <Box display='flex' flexDirection={'column'}>
        <>
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg="#219ebc"
            color={["white", "white", "primary.700", "primary.700"]}
          >
            <Button backgroundColor='#fff' onClick={onOpen} w={'50px'}>
              <HamburgerIcon color={'#000'} w={5} h={5} />
            </Button>
          </Flex>

          <Drawer placement='left' onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth='1px'>Bem vindo! Maria ❤</DrawerHeader>
              <DrawerBody>
                <Box as='button' p={'20px'} fontSize={'20px'} alignItems={'center'} justifyContent={'center'} display={'flex'} gap={'15px'}>
                  <Icon as={FiList} />
                  <Link to='/'>Exercícios</Link>
                </Box>
                <Box as='button' p={'20px'} fontSize={'20px'} alignItems={'center'} justifyContent={'center'} display={'flex'} gap={'15px'}>
                  <Icon as={FiBook} />
                  <Link to='/exampleCards'>Modelo de Fichas</Link>
                </Box>
                <Box as='button' p={'20px'} fontSize={'20px'} alignItems={'center'} justifyContent={'center'} display={'flex'} gap={'15px'}>
                  <Icon as={FiUsers} />
                  <Link to='/students'>Alunos</Link>
                </Box>
                <Box as='button' p={'20px'} fontSize={'20px'} alignItems={'center'} justifyContent={'center'} display={'flex'} gap={'15px'}>
                  <Icon as={FiClipboard} />
                  <Link to='/exampleCards'>Fichas de treino</Link>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>

        <Outlet />
      </Box>
    </Box>
  )
}

export default App
