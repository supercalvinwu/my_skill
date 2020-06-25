import { db } from './App'

export const user_release_a_vm = async (user) => {

    // check if user is signed in
    if (user.signedIn) {

        // if user is signed in
        var userFound = null;
        var vm_info = null;

        var usersRef = db.collection("users").doc(user.doc);
        await usersRef.get().then(function (doc) {
            if (doc.exists) {
                userFound = doc.data()
            } else {
                console.log("No such document!");
            }
        }).then(() => {

        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        var metaRef = db.collection("meta").doc("vm_info");
        await metaRef.get().then(function (doc) {
            if (doc.exists) {
                vm_info = doc.data()
            } else {
                console.log("No such document!");
            }
        }).then(() => {

        }).catch(function (error) {
            console.log("Error getting document:", error);
        });


        if (userFound) {
            if (userFound.max_rent - userFound.vm_rented > 0) {
                // if user's max_rent < (vm_rented + 1)
                if (vm_info.total - vm_info.been_rented > 0) {
                    // if server still have more available vm to be rented

                    // then help user to rent one more vm
                    db.collection("users").doc(user.doc).update({
                        vm_rented: userFound.vm_rented + 1
                    })
                        .then(function () {

                        })
                        .catch(function (error) {
                            console.error("Error writing document: ", error);
                        });

                    // also mark that available vm -1
                    db.collection("meta").doc("vm_info").update({
                        been_rented: vm_info.been_rented + 1
                    })
                        .then(function () {

                        })
                        .catch(function (error) {
                            console.error("Error writing document: ", error);
                        });

                    return ({ success: true, msg: "success" })

                } else {
                    console.log("out of available vm")
                    return ({ success: false, msg: "Server ran out of available vm" })
                }
            } else {
                console.log("exceed")
                return ({ success: false, msg: "You can only rent " + userFound.max_rent + " VM" })
            }
        }

    } else {
        console.log("user is not signed in")
        return ({ success: false, msg: "You are not signed in" })

    }

}

export const rent_a_vm = async (user) => {

    // check if user is signed in
    if (user.signedIn) {

        // if user is signed in
        var userFound = null;
        var vm_info = null;

        var usersRef = db.collection("users").doc(user.doc);
        await usersRef.get().then(function (doc) {
            if (doc.exists) {
                userFound = doc.data()
            } else {
                console.log("No such document!");
            }
        }).then(() => {

        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

        var metaRef = db.collection("meta").doc("vm_info");
        await metaRef.get().then(function (doc) {
            if (doc.exists) {
                vm_info = doc.data()
            } else {
                console.log("No such document!");
            }
        }).then(() => {

        }).catch(function (error) {
            console.log("Error getting document:", error);
        });


        if (userFound) {
            if (userFound.max_rent - userFound.vm_rented > 0) {
                // if user's max_rent < (vm_rented + 1)
                if (vm_info.total - vm_info.been_rented > 0) {
                    // if server still have more available vm to be rented

                    // then help user to rent one more vm
                    db.collection("users").doc(user.doc).update({
                        vm_rented: userFound.vm_rented + 1
                    })
                        .then(function () {

                        })
                        .catch(function (error) {
                            console.error("Error writing document: ", error);
                        });

                    // also mark that available vm -1
                    db.collection("meta").doc("vm_info").update({
                        been_rented: vm_info.been_rented + 1
                    })
                        .then(function () {

                        })
                        .catch(function (error) {
                            console.error("Error writing document: ", error);
                        });

                    return ({ success: true, msg: "success" })

                } else {
                    console.log("out of available vm")
                    return ({ success: false, msg: "Server ran out of available vm" })
                }
            } else {
                console.log("exceed")
                return ({ success: false, msg: "You can only rent " + userFound.max_rent + " VM" })
            }
        }

    } else {
        console.log("user is not signed in")
        return ({ success: false, msg: "You are not signed in" })

    }

}