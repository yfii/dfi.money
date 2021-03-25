/* eslint-disable */
import React, { useState, useEffect, createContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import BigNumber from "bignumber.js";
import {byDecimals,calculateReallyNum} from 'features/helpers/bignumber';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion'
import classNames from "classnames";
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionActions'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import CustomOutlinedInput from 'components/CustomOutlinedInput/CustomOutlinedInput';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import {primaryColor} from "assets/jss/material-kit-pro-react.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Avatar from '@material-ui/core/Avatar';
import CustomInput from "components/CustomInput/CustomInput.js";
// sections for this section
// import SectionOpenedPool from "./SectionOpenedPool";
import { useSnackbar } from 'notistack';
//  hooks
import { useConnectWallet } from '../../home/redux/hooks';
import { useAllowance, useFetchPoolBalances, useFetchApproval, useFetchDeposit, useFetchWithdraw, useFetchContractApy, useFetchExit, useFetchGetReward, useEarned, useBalanceOf } from '../redux/hooks';
import CustomSlider from 'components/CustomSlider/CustomSlider';

import sectionPoolsStyle from "../jss/sections/sectionPoolsStyle";
import { reflect } from 'async';
import { inputLimitPass,inputFinalVal,isEmpty } from 'features/helpers/utils';
import CustomDialog from 'components/CustomDialog/CustomDialog';
import PoolHeader from './PoolHeader'
import PoolContent from './PoolContent';

const useStyles = makeStyles(sectionPoolsStyle);

export default function SectionPools() {
  const { t, i18n } = useTranslation();
  const { web3, address, networkId } = useConnectWallet();
  let { pools } = useFetchPoolBalances();
  const [ openedCardList, setOpenCardList ] = useState([0]);
  const [ openDialog, setOpenDialog] = useState(false);
  const [ waitDialogConfirmJson, setWaitDialogConfirmJson] = useState({'content':'','func':()=>{}});
  const classes = useStyles();

  const { fetchApproval, fetchApprovalPending } = useFetchApproval();
  const { fetchDeposit, fetchDepositEth, fetchDepositPending } = useFetchDeposit();
  const { fetchWithdraw, fetchWithdrawEth, fetchWithdrawPending } = useFetchWithdraw();
  const { contractApy, fetchContractApy } = useFetchContractApy();

  const [ depositedBalance, setDepositedBalance ] = useState({});
  const [ withdrawAmount, setWithdrawAmount ] = useState({});

  const { enqueueSnackbar } = useSnackbar();

  const changeDetailInputValue = (type,index,total,tokenDecimals,event) => {
    let value = event.target.value;
    if(!inputLimitPass(value,tokenDecimals)){
      return;
    }
    let sliderNum = 0;
    let inputVal = Number(value.replace(',',''));
    if(value){
        sliderNum = byDecimals(inputVal/total,0).toFormat(2) * 100;
    }
    switch(type){
        case 'depositedBalance':
            setDepositedBalance({
                ...depositedBalance,
                [index]: inputFinalVal(value,total,tokenDecimals),
                [`slider-${index}`]: sliderNum,
            });
            break;
        case 'withdrawAmount':
            setWithdrawAmount({
                ...withdrawAmount,
                [index]: inputFinalVal(value,total,tokenDecimals),
                [`slider-${index}`]: sliderNum,
            });
            break;
        default:
            break;
    }
  }

  const handleDepositedBalance = (index,total,event,sliderNum) => {
    setDepositedBalance({
      ...depositedBalance,
      [index]: sliderNum == 0 ? '0': calculateReallyNum(total,sliderNum),
      [`slider-${index}`]: sliderNum == 0 ? 0: sliderNum,
    });
  }

  const handleWithdrawAmount = (index,total,event,sliderNum) => {
    setWithdrawAmount({
      ...withdrawAmount,
      [index]: sliderNum == 0 ? '0': calculateReallyNum(total,sliderNum),
      [`slider-${index}`]: sliderNum == 0 ? 0: sliderNum,
    });
  };

  const onApproval = (pool, index, event) => {
    event.stopPropagation();
    fetchApproval({
      address,
      web3,
      tokenAddress: pool.tokenAddress,
      contractAddress: pool.earnContractAddress,
      index
    }).then(
      () => enqueueSnackbar(`Approval success`, {variant: 'success'})
    ).catch(
      error => enqueueSnackbar(`Approval error: ${error}`, {variant: 'error'})
    )
  }

  const onDeposit = (pool, index, isAll, balanceSingle, event) => {
    if (isAll) {
      setDepositedBalance({
        ...depositedBalance,
        [index]: String(forMat(balanceSingle)),
        [`slider-${index}`]: 100,
      })
//      onDeposit(pool, index, false, balanceSingle, event);
  //    return;
      // fetchDepositPending[index];
      // isAll = false;
    }
    let amountValue = depositedBalance[index] ? depositedBalance[index].replace(',',''): depositedBalance[index];


    console.log('VaultPage.pool.tokenAddress', pool.tokenAddress)
    if (!pool.tokenAddress) {// 如果是eth
      fetchDepositEth({
        address,
        web3,
        amount: new BigNumber(amountValue).multipliedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals)).toString(10),
        contractAddress: pool.earnContractAddress,
        index
      }).then(
        () => enqueueSnackbar(`Deposit success`, {variant: 'success'})
      ).catch(
        error => enqueueSnackbar(`Deposit error: ${error}`, {variant: 'error'})
      )
    } else {
      fetchDeposit({
        address,
        web3,
        isAll,
        amount: new BigNumber(amountValue).multipliedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals)).toString(10),
        contractAddress: pool.earnContractAddress,
        index
      }).then(
        () => enqueueSnackbar(`Deposit success`, {variant: 'success'})
      ).catch(
        error => enqueueSnackbar(`Deposit error: ${error}`, {variant: 'error'})
      )
    }
  }

  const onWithdraw = (pool, index, isAll, singleDepositedBalance, event) => {
    event.stopPropagation();
    if (isAll) {
      setWithdrawAmount({
        ...withdrawAmount,
        [index]: String(forMat(singleDepositedBalance)),
        [`slider-${index}`]: 100,
      })
    }
    let amountValue =  withdrawAmount[index]? withdrawAmount[index].replace(',',''): withdrawAmount[index];
    if (!pool.tokenAddress) {// 如果是eth
      fetchWithdrawEth({
        address,
        web3,
        isAll,
        amount: new BigNumber(amountValue).multipliedBy(new BigNumber(10).exponentiatedBy(pool.itokenDecimals)).toString(10),
        contractAddress: pool.earnContractAddress,
        index
      }).then(
        () => enqueueSnackbar(`Withdraw success`, {variant: 'success'})
      ).catch(
        error => enqueueSnackbar(`Withdraw error: ${error}`, {variant: 'error'})
      )
    } else {
      fetchWithdraw({
        address,
        web3,
        isAll,
        amount: new BigNumber(amountValue).multipliedBy(new BigNumber(10).exponentiatedBy(pool.itokenDecimals)).toString(10),
        contractAddress: pool.earnContractAddress,
        index
      }).then(
        () => enqueueSnackbar(`Withdraw success`, {variant: 'success'})
      ).catch(
        error => enqueueSnackbar(`Withdraw error: ${error}`, {variant: 'error'})
      )
    }

  }

  const openCard = id => {
    return setOpenCardList(
      openedCardList => {
        if(openedCardList.includes(id)) {
          return openedCardList.filter(item => item!==id)
        } else {
          return [...openedCardList, id]
        }
      }
    )
  }

  const isMoreDepostLimit = (value,depostLimit) => {
    if(isEmpty(value) ||  depostLimit==0 || value < depostLimit){
      return false
    }
    return true;
  }

  useEffect(() => {
    fetchContractApy();
  }, [pools, fetchContractApy]);

  const forMat = number => {
    return new BigNumber(
      number
    ).multipliedBy(
      new BigNumber(10000)
    ).dividedToIntegerBy(
      new BigNumber(1)
    ).dividedBy(
      new BigNumber(10000)
    ).toNumber()
  }

  const isZh = Boolean((i18n.language == 'zh') || (i18n.language == 'zh-CN'));
  const gridItemStyle = {
    display: "flex",
    justifyContent : "space-around",
    alignItems : "center",
    alignContent: "space-around",
  }

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const handleClose = () => {
    setOpenDialog(false);
    setTimeout(()=>{
      setWaitDialogConfirmJson({'content':'','func':()=>{}})
    },200)
  }

  return (
    <Grid container style={{paddingTop: '4px'}}>
      <Grid item xs={12}>
        <div className={classes.mainTitle}>{t('Vault-Main-Title')}</div>
        <h3 className={classes.secondTitle}>{t('Vault-Second-Title')}</h3>
      </Grid>
      <CustomDialog
        open={openDialog}
        handleClose={handleClose}
        dialogContent={t(waitDialogConfirmJson.content)}
        agreeJson={{
          content:t('Vault-Dialog-Agree-Content'),
          callback:()=>{
            waitDialogConfirmJson.func();
          }
        }}
        disagreeJson={{
          content:t('Vault-Dialog-Disagree-Content'),
          callback:()=>{
          }
        }}
        />
        {pools.filter(pool => (pool.chainId === networkId && !pool.liquidityOnly)).map((pool, index) => (
          <Grid item xs={12} container key={index} style={{marginBottom: "24px"}} spacing={0}>
            <div style={{width: "100%"}}>
              <Accordion
                  expanded={Boolean(openedCardList.includes(index))}
                  className={classes.accordion}
                  TransitionProps={{ unmountOnExit: true }}
              >
                <AccordionSummary
                    className={classes.details}
                    style={{ justifyContent: "space-between"}}
                    onClick={(event) => {
                        event.stopPropagation();
                        openCard(index)
                    }}
                >
                  <PoolHeader index={index} pool={pool} classes={classes} openedCardList={openedCardList} openCard={openCard} />
                </AccordionSummary>
                <AccordionDetails style={{ justifyContent: "space-between"}}>
                  <PoolContent index={index} pool={pool} classes={classes} openedCardList={openedCardList} openCard={openCard} />
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        ))}
    </Grid>
  )
}
