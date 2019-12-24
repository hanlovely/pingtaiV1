/**
 * Created by hehe on 2019/2/27.
 */
var hostId = SawlCfg.entzn[edition];
var items = [];
$(function () {
///*在线查验的点击事件*/
    $(".startOnlineCheck").click(function () {
        if ($("#online input").val() == "") {
            alert("请输入正确的公证书号跟有效证件号！");
            return false;
        }
        if (!(/^[0-9a-zA-Z]+$/.test($(".idCard").val()))) {
            alert("证件号只能输入字母跟数字");
            return false;
        }
        if ($(".idCard").val().length < 15) {
            alert("证件号至少输入15个字符");
            return false;
        }
        online();
    });
///*上传文件查验的点击事件*/
    $(".startCheck").click(function () {
        if (items.length <= 0) {
            alert("请选择文件！");
            return
        }
        uploadFile();
    });

})
/*---------------------------上传文件-----------------------------------*/

///*拖拽事件*/
function dragdrop() {
    var dragDrop = document.getElementById('uploading');

    //拖拽上传文件
    dragDrop.addEventListener("dragover", function (e) {
        e.stopPropagation();
        //必须阻止默认事件
        e.preventDefault();
    }, false);
    dragDrop.addEventListener("dragleave", function (e) {
        e.stopPropagation();
        e.preventDefault();
        //拖拽进来样式改变
        $(".fileMsg").show();
        $(".uploading").addClass("hide");
    }, false);
    dragDrop.addEventListener("drop", function (e) {
        e.stopPropagation();
        e.preventDefault();
        //取消鼠标经过样式
        //获取文件列表对象和文件相对路径
        items = e.dataTransfer.files;
        var html = "";
        //var formData = new FormData();
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item) {
                //判断是否存在
                var fileName = item.name.lastIndexOf(".");//取到文件名开始到最后一个点的长度
                var fileNameLength = item.name.length;//取到文件名长度
                var fileFormat = item.name.substring(fileName + 1, fileNameLength);//截取文件名
                if (fileFormat !== "pdf") {
                    alert("请上传PDF格式的文件");
                    $(".fileMsg").addClass("hide");
                    $(".uploading").removeClass("hide");
                    // window.setTimeout(function (e) {
                    //     window.location.reload();
                    // },2000)
                    return false;
                }
                $(".fileMsg").removeClass("hide");
                $(".uploading").addClass("hide");
                //formData.append('files', item);
                html += ' <li>' +
                    '<sapn class="fileName">' + item.name + '</sapn>' +
                    ' <span><img src="./assets/img/yixuanze.png">已选择</span>' +
                    '</li>';
            }
        }
        $(".fileMsg").html(html);
        // $(".nrb_main2").removeClass("hide");
    }, false);
};
///*点击事件*/
$("#file").on("change", function () {
    items = document.getElementById("file").files;
    var html = "";
    //var formData = new FormData();
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item) {
            //判断是否存在
            var fileName = item.name.lastIndexOf(".");//取到文件名开始到最 后一个点的长度
            var fileNameLength = item.name.length;//取到文件名长度
            var fileFormat = item.name.substring(fileName + 1, fileNameLength);//截取文件名
            if (fileFormat !== "pdf") {
                // window.location.reload();
                alert("请上传PDF格式的文件");
                return false;
            }
            $(".fileMsg").removeClass("hide");
            $(".uploading").addClass("hide");
            //formData.append('files', item);
            html += ' <li>' +
                '<sapn class="fileName">' + item.name + '</sapn>' +
                ' <span><img src="./assets/img/yixuanze.png">已选择</span>' +
                '</li>';
        }
    }
    $(".fileMsg").html(html);
    // $(".nrb_main2").removeClass("hide");
});
/* 上传 end*/
/*----------------------------ajax 查询----------------------------------*/

///*上传文件验真*/
function uploadFile() {
    if (items.length <= 0) {
        alert("请上传文件");
        return
    }
    var formData = new FormData();
    formData.append('file', items[0]);
    $.ajax({
        url: hostId + 'saveFileGenerateHash.htm',
        type: 'post',
        data: formData,
        async: false,
        cache: false,
        contentType: false,//不设置内容类型
        processData: false, //不处理数据
        traditional: true,
        beforeSend: function () {
            // loading();
        },
        success: function (data) {
            if (data.success) {
                var hash = data.msg;
                // sessionStorage.setItem("data-hash", JSON.stringify(hash));
                originalSuccess(hash)
                // window.location.href = "inspectionResults.html?type=files";
            } else {
                $(".uploading").addClass("hide");
                $(".fileMsg").addClass("hide");
                $(".fileMsg2").removeClass("hide");
                $(".startCheck").addClass("hide");
                $(".continueCheck").removeClass("hide");
            }
        },
        error: function () {
            alert("上传失败！");
        },
        complete: function (xhr, status) {
            // $("#loading").remove();
        }
    });
};

///*输入证件查验*/
function online() {
    var idCard = $(".idCard").val();
    idCard = idCard.replace('（', '(').replace('）', ')');
    // console.log(idCard);
    var notarybookNumber = $(".notarybookNumber").val();
    notarybookNumber = notarybookNumber.replace('（', '(').replace('）', ')');
    $.ajax({
        url: hostId + "getStgDataNtzn.htm",
        type: "GET",
        data: {
            "certCode": idCard,
            "notaCode": notarybookNumber
        },
        dataType: "json",
        beforeSend: function () {
            // loading();
        },
        success: function (data) {
            if (data.success) {
                var datas = data.data;
                sessionStorage.setItem("onlineJson", JSON.stringify(datas));
                onlineSuccess(datas);
            } else {
                $(".fileMsgs").addClass("hide");
                $(".uploading2").removeClass("hide");
                $(".startOnlineCheck").addClass("hide");
                $(".continueOnlineCheck").removeClass("hide");
            }
        },
        complete: function (xhr, status) {
            // $("#loading").remove();
        }
    })
}

/*---------------------------ajax 查询结果-------------------------------*/

///*证件号在线查 type=online*/
function onlineSuccess(data) {
    //从上个页面把data数据带过来
    // var onlineJson = sessionStorage.getItem("onlineJson");
    console.log("-----在线查 data-----");
    // var data = $.parseJSON(onlineJson);
    console.log(data)
    $(".nota_matter2").val(data.nota_matter);
    $(".notary_name2").val(data.notary_name);
    $(".npo_id2").val(data.npo_name);
    $(".nota_date2").val(data.nota_date_cn);
    $(".nota_code2").val(data.nota_code);
    $(".chain_hash2").val(data.chain_hash);
    $(".data_hash3").val(data.data_hash);
    $(".data_hash2").val(data.trxhash);
    if (data.sys_status < 0) {
        $(".sys_status").removeClass("hide");
        $(".downloadss").addClass("hide");
    }
    if (data.version > 1) {
        $(".version").removeClass("hide");
    }
    if (data.trxhash !== undefined) {
        $(".data_hash2").val(data.trxhash);
        localStorage.setItem("deepchain_txHash", data.trxhash);
        // $(".data_hash2").click(function () {
        //     let txHash = localStorage.getItem("deepchain_txHash");
        //     window.location.href = deepchainPath + "/datails.html?trxhash=" + txHash;
        // });
    } else {
        $(".hashIsShow").css("display", "none");
        $(".status-bar").css("height", "80px");
    }

    var personList = data.personList;
    var html = "";
    if (personList) {
        var changeNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        var lengths = null;
        if (changeNum.length < personList.length) {
            /* 用changeNum的*/
            lengths = changeNum.length;
        } else {
            /*用personLists的*/
            lengths = personList.length;
        }
        for (var i = 0; i < lengths; i++) {
            html +=
                ' <div class="online">' +
                '<span class="lf">当事人' + changeNum[i] + ':</span>' +
                '<input class="online_input" value=' + personList[i].person_name + ' type="text">' +
                '</div>' +
                ' <div class="online">' +
                '<span class="lf">有效证件:</span>' +
                '<input class="online_input" value=' + personList[i].cert_code + ' type="text">' +
                '</div>'
        }

        $(".nota_date2").parent().after(html);

    }
    dowloads(data.data_id);
    $(".nrb_main_s3").addClass("hide");
    $(".startOnlineCheck").addClass("hide");
    $(".nrb_main_s4").removeClass("hide");
    $(".continueOnlineCheck").removeClass("hide");
};

///*原件  type=files*/
function originalSuccess(data) {
    // var hashData = $.parseJSON(sessionStorage.getItem("data-hash"));
    var hashData = data;
    $.ajax({
        url: hostId + "getStgDataNtznByHash.htm",
        type: "GET",
        data: {
            "dataHash": hashData
        },
        dataType: "json",
        success: function (datas) {
            if (datas.success) {
                console.log("--------上传的 data---------");
                console.log(datas);
                var data = datas.data;
                $(".nota_matter").val(data.nota_matter);
                $(".notary_name").val(data.notary_name);
                $(".npo_id").val(data.npo_name);
                $(".nota_date").val(data.nota_date_cn);
                $(".nota_code").val(data.nota_code);
                $(".chain_hash").val(data.chain_hash);
                $(".data_hash1").val(data.data_hash);
                // console.log(data.sys_status);
                if (data.sys_status < 0) {
                    $(".sys_status").removeClass("hide");
                    $(".downloadss").addClass("hide");
                }
                if (data.version > 1) {
                    $(".version").removeClass("hide");
                }
                console.log(data);
                if (data.trxhash !== undefined) {
                    $(".data_hash").val(data.trxhash);
                    localStorage.setItem("deepchain_txHash", data.trxhash);
                    // $(".data_hash").click(function () {
                    //     let txHash = localStorage.getItem("deepchain_txHash");
                    //     window.location.href = deepchainPath + "/datails.html?trxhash=" + txHash;
                    // });
                } else {
                    $(".hashIsShow").css("display", "none");
                    $(".status-bar").css("height", "80px");
                }


                var personList = data.personList;
                var html = "";
                if (personList) {
                    var changeNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
                    var lengths = null;
                    if (changeNum.length < personList.length) {
                        /* 用changeNum的*/
                        lengths = changeNum.length;
                    } else {
                        /*用personLists的*/
                        lengths = personList.length;
                    }
                    for (var i = 0; i < lengths; i++) {
                        html +=
                            ' <div class="online">' +
                            '<span class="lf">当事人' + changeNum[i] + ':</span>' +
                            '<input class="online_input" value=' + personList[i].person_name + ' type="text">' +
                            '</div>' +
                            ' <div class="online">' +
                            '<span class="lf">有效证件:</span>' +
                            '<input class="online_input" value=' + personList[i].cert_code + ' type="text">' +
                            '</div>'
                    }

                    $(".nota_date").parent().after(html);

                }
                dowloads(data.data_id);
                $(".nrb_main_s").addClass("hide");
                $(".startCheck").addClass("hide");
                $(".nrb_main_s2").removeClass("hide");
                $(".continueCheck").removeClass("hide");
            } else {
                $(".uploading").addClass("hide");
                $(".fileMsg").addClass("hide");
                $(".fileMsg2").removeClass("hide");
                $(".startCheck").addClass("hide");
                $(".continueCheck").removeClass("hide");

            }
        }
    })
};

///*下载原件*/
function dowloads(dataid) {
    // var dataid=sessionStorage.getItem("dataid");
    $.ajax({
        url: hostId + "downloadNtzn.htm",
        type: "post",
        async: "false",
        data: {
            "dataId": dataid/*dataid*/
        },
        dataType: "json",
        success: function (datas) {
            if (datas.success) {
                var path = datas.data.path;
                // console.log(path);
                $(".downloadss").attr("href", path);
            } else {
                $(".downloadss").hide();
                alert(datas.msg);
            }
        }
    })

};


