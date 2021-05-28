import React, { useState } from 'react';
import { actSavingFile } from '../App';


export default function FormHome({ ...props }) {

    const [values, setValue] = useState({
        layout: '2', Retailer: "vinaidcanteen78",
        client_id: '', client_secret: 'ECE3F4654222D1D0778F02E658904F48ACF6DAF6',
        type: 'main',
        idChiNhanh: "12682",
        priceBookId: "4103", orgCode: "140,78,4",
    });
    const [subValues, setSubValues] = useState({
        ServiceName: '', AuthUser: "ODS000801",
        AuthKey: "bbf87093-a55e-462e-a03e-593fedcdfc4b", Host: "https://api.cloudfone.vn/",
        Ext: "1000366",
        call_category_key: "",
        kiot_retailer: "taphoac", kiot_client_id: "",
        kiot_client_secret: "", kiot_idChiNhanh: '',
        merchantCode: ""
    })
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log("eventCHange", name, value);
        if (name == "orgCode") {
            setValue({
                ...values, [name]: value,
            })
        } else {
            setValue({
                ...values, [name]: value
            })
        }
        console.log("afterhandleOnChange", values);
    }
    const handleOnChangeC = (e) => {
        const { name, value } = e.target;
        console.log('changeC', name, value);

        setSubValues({
            ...subValues, [name]: value,
        })
        console.log("afterC", subValues);
    }
    const handleForm = (event) => {
        event.preventDefault();
        console.log("submit", values);
        console.log("type", typeof (values.orgCode));
        (typeof (values.orgCode) !== 'string') ? alert('vui long nhap bam F5') :
            values.orgCode = values.orgCode.split(',');
        subValues.Ext = subValues.Ext.split(',');
        values.ODS = subValues;
        props.dispatchActSaving(values);
    };
    return (
        <div id="formMain" className="formContent">
            <h3 className="text-center pt-3">Cấu hình thiết bị</h3>
            <form onSubmit={(event) => handleForm(event)}>
                <div className="form-group row">
                    <label className="col-sm-2 titLabel" htmlFor="exampleInputEmail1">Layout</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            name="layout"
                            value={values.layout}
                            onChange={(event) => handleOnChange(event)}
                            className="form-control"
                            placeholder="Nhập loại layout"
                        />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-sm-2 titLabel" >Retailer</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="Retailer"
                            value={values.Retailer}
                            onChange={(event) => handleOnChange(event)}
                            className="form-control"
                            placeholder="Điền retailer" />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-sm-2 titLabel" htmlFor="exampleInputPassword1">ClientId</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name='client_id'
                            value={values.client_id}
                            onChange={(event) => handleOnChange(event)}
                            className="form-control"

                            placeholder="Client_id" />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-sm-2 titLabel" htmlFor="exampleInputPassword1">ClientSecret</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="client_secret"
                            value={values.client_secret}
                            onChange={(event) => handleOnChange(event)}
                            className="form-control"

                            placeholder="Client_secret" />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-sm-2 titLabel" htmlFor="exampleInputPassword1">Type</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="type"
                            value={values.type}
                            onChange={(event) => handleOnChange(event)}
                            className="form-control"
                            id="type"
                            placeholder="type" />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-sm-2 titLabel" >IdChiNhanh</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="idChiNhanh"
                            value={values.idChiNhanh}
                            onChange={(event) => handleOnChange(event)}
                            className="form-control"

                            placeholder="idChiNhanh" />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-sm-2 titLabel" >priceBookId</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="priceBookId"
                            value={values.priceBookId}
                            onChange={(event) => handleOnChange(event)}
                            className="form-control"
                            id="priceBookId"
                            placeholder="Khong bat buoc" />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-sm-2 titLabel" >orgCode</label>
                    <div className="col-sm-10">
                        <input type="text"
                            name="orgCode"
                            value={values.orgCode}
                            onChange={(event) => handleOnChange(event)}
                            className="form-control"

                            placeholder="Dien ma ordCode" />
                    </div>

                </div>
                <div className="form-group row">
                    <label className="col-sm-2 titLabel" >ODS</label>
                    <div className="col-sm-8">
                        <br />
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >ServiceName</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="ServiceName"
                                    value={subValues.ServiceName}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="ServiceName" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >AuthKey</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="AuthKey"
                                    value={subValues.AuthKey}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="AuthKey" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >AuthUser</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="AuthUser"
                                    value={subValues.AuthUser}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="AuthUser" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >Host</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="Host"
                                    value={subValues.Host}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="Host" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >Ext</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="Ext"
                                    value={subValues.Ext}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="Ext" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >call_category_key</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="call_category_key"
                                    value={subValues.call_category_key}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="call_category_key" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >kiot_retailer</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="kiot_retailer"
                                    value={subValues.kiot_retailer}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="Dkiot_retailer" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >kiot_client_id</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="kiot_client_id"
                                    value={subValues.kiot_client_id}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="kiot_client_id" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >kiot_client_secret</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="kiot_client_secret"
                                    value={subValues.kiot_client_secret}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="kiot_client_secret" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >kiot_idChiNhanh</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="kiot_idChiNhanh"
                                    value={subValues.kiot_idChiNhanh}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="kiot_idChiNhanh" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <label className="col-sm-4 titLabel" >merchantCode</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="merchantCode"
                                    value={subValues.merchantCode}
                                    onChange={(event) => handleOnChangeC(event)}
                                    className="form-control"
                                    placeholder="Dien ma ordCode" />
                            </div>
                        </div>
                    </div>

                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}



