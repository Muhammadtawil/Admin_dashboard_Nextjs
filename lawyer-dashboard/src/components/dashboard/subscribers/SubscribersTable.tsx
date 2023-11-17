/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/semi */
'use client'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { deleteAlert } from '../alerts/alerts'
import cellStyle from '../shared/cellStyle'
import ActionsComponent from '../shared/PaginationList'
import { useTranslations } from 'next-intl'

export default function SubscribersTable ({
  dataRows,
  deleteSubscriber

}: {
  dataRows: any[]
  deleteSubscriber: any

}) {
  const t = useTranslations('subscribersPage')

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage)
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  };

  const RenderTableRows = (
    dataRows: any[],
    page: number,
    rowsPerPage: number
  ) => {
    return dataRows
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((subscriber: any, index: number) => {
        return (
    
          <TableRow key={subscriber.subscriberId}>

            <TableCell
              sx={{
                ...cellStyle
              }}
            >
              {subscriber.subscriberEmail}
            </TableCell>

            <TableCell align="right" sx={cellStyle}>
              <Box sx={{ display: 'inline-block' }}>
                <Tooltip title={t('delete')} placement="top">
                  <IconButton
                    aria-label={t('delete')}
                    size="small"
                    color="error"
                    className="error"
                    onClick={() => { deleteAlert(deleteSubscriber(subscriber.subscriberId)); }}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>

              </Box>
            </TableCell>
          </TableRow>
        )
      })
  };
  return (
    <Card
      sx={{
        boxShadow: 'none',
        borderRadius: '10px',
        p: '25px 20px 15px',
        mb: '15px'
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 'none'
        }}
      >
        <Table
          sx={{ minWidth: 930 }}
          aria-label="custom pagination table"
          className="dark-table"
        >
          <TableHead sx={{ background: '#F7FAFF' }}>
            <TableRow>
              <TableCell sx={cellStyle}>{t('subscriberEmail')}</TableCell>
              <TableCell align="right" sx={cellStyle}>
              {t('actions')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{RenderTableRows(dataRows, page, rowsPerPage)}</TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: t('All'), value: -1 }]}
                colSpan={8}
                count={dataRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page'
                  },
                  native: true
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={ActionsComponent}
                style={{ borderBottom: 'none' }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

    </Card>
  )
}
