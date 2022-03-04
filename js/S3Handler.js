const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    const s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        region: 'ap-northeast-2',
    });  //s3 configuration

    var objKey = file.name;
    const param = {
        'Bucket': 'electronicitems',
        'Key': objKey,
        'ACL': 'public-read',
        'Body': file,
        'ContentType': 'image/png'
    };  //s3 업로드에 필요한 옵션 설정

    s3.upload(param, (err, data) => {  //callback function
        if (err) {
            console.log('image upload err : ' + err);
            return;
        }

        const imgTag = '<img src=${data.Location} width="100%" />';

        const action = {
            type: 'content',
            value: `${postState.content} \n ${imgTag}`
        };
        postDispatch(action)
    });
};