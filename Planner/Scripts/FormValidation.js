$(function () {
    function addError(inputField, errorMessage) {
        inputField.addClass('invalid');
        inputField.next('.ValidationError').html(errorMessage);
    }

    function removeError(inputField) {
        inputField.removeClass('invalid');
        inputField.next('.ValidationError').html('');
    }

    function isntDate(parsing) {
        return !Date.parse(parsing);
    }

    function isntTime(parsing) {
        return parsing.getTime();
    }

    $(".EventCreate").submit(function (event) {
        var isValid = true;
        var NameInput = $(this).children('input[name=Name]');
        var DescriptionInput = $(this).children('input[name=Description]');
        var DateInput = $(this).children('input[name=Date]');
        var StartTimeInput = $(this).children('input[name=Start_Time]');
        var EndTimeInput = $(this).children('input[name=End_Time]');

        if (NameInput.val().length == 0) {
            addError(NameInput, "Name cannot be empty.");
            isValid = false;
        }
        else if (NameInput.val().length > 16) {
            addError(NameInput, "Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(NameInput);
        }
        if (DescriptionInput.val().length == 0) {
            addError(DescriptionInput, "Description cannot be empty.");
            isValid = false;
        }
        else if (DescriptionInput.val().length > 256) {
            addError(DescriptionInput, "Description cannot exceed 256 characters.");
            isValid = false;
        }
        else {
            removeError(DescriptionInput);
        }
        if (isntDate(DateInput.val())) {
            addError(DateInput, "Entered date must be valid.");
            isValid = false;
        }
        else {
            removeError(DateInput);
        }

        event.preventDefault();
        return false;
    });

    $('.EventCreate > input[name=Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Name cannot be empty.");
            }
            else if ($(this).val().length > 16) {
                addError($(this), "Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.EventCreate > input[name=Description]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Description cannot be empty.");
            }
            else if ($(this).val().length > 256) {
                addError($(this), "Description cannot exceed 256 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.EventCreate > input[name=Date], .EventUpdate > input[name=Date]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (isntDate($(this).val())) {
                addError($(this), "Entered date must be valid.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".EventUpdate").submit(function (event) {
        var isValid = true;
        var NameInput = $(this).children('input[name=Name]');
        var DescriptionInput = $(this).children('input[name=Description]');
        var DateInput = $(this).children('input[name=Date]');
        var StartTimeInput = $(this).children('input[name=Start_Time]');
        var EndTimeInput = $(this).children('input[name=End_Time]');

        if (NameInput.val().length > 16) {
            addError(NameInput, "Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(NameInput);
        }
        if (DescriptionInput.val().length > 256) {
            addError(DescriptionInput, "Description cannot exceed 256 characters.");
            isValid = false;
        }
        else {
            removeError(DescriptionInput);
        }
        if (isntDate(DateInput.val())) {
            addError(DateInput, "Entered date must be valid.");
            isValid = false;
        }
        else {
            removeError(DateInput);
        }

        event.preventDefault();
        return false;
    });

    $('.EventUpdate > input[name=Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.EventUpdate > input[name=Description]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 256) {
                addError($(this), "Description cannot exceed 256 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".EventTypeCreate").submit(function (event) {
        var isValid = true;
        var NameInput = $(this).children('input[name=Name]');
        var DescriptionInput = $(this).children('input[name=Description]');

        if (NameInput.val().length == 0) {
            addError(NameInput, "Name cannot be empty.");
            isValid = false;
        }
        else if (NameInput.val().length > 16) {
            addError(NameInput, "Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(NameInput);
        }
        if (DescriptionInput.val().length == 0) {
            addError(DescriptionInput, "Description cannot be empty.");
            isValid = false;
        }
        else if (DescriptionInput.val().length > 64) {
            addError(DescriptionInput, "Description cannot exceed 64 characters.");
            isValid = false;
        }
        else {
            removeError(DescriptionInput);
        }

        event.preventDefault();
        return false;
    });

    $('.EventTypeCreate > input[name=Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Name cannot be empty.");
            }
            else if ($(this).val().length > 16) {
                addError($(this), "Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.EventTypeCreate > input[name=Description]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Description cannot be empty.");
            }
            else if ($(this).val().length > 64) {
                addError($(this), "Description cannot exceed 64 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".EventTypeUpdate").submit(function (event) {
        var isValid = true;
        var NameInput = $(this).children('input[name=Name]');
        var DescriptionInput = $(this).children('input[name=Description]');

        if (NameInput.val().length > 16) {
            addError(NameInput, "Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(NameInput);
        }
        if (DescriptionInput.val().length > 64) {
            addError(DescriptionInput, "Description cannot exceed 64 characters.");
            isValid = false;
        }
        else {
            removeError(DescriptionInput);
        }

        event.preventDefault();
        return false;
    });

    $('.EventTypeUpdate > input[name=Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Name cannot be empty.");
            }
            else if ($(this).val().length > 16) {
                addError($(this), "Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.EventTypeUpdate > input[name=Description]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 64) {
                addError($(this), "Description cannot exceed 64 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PlaceCreate').submit(function (event) {
        var isValid = true;
        var LongNameInput = $(this).children('input[name=Long_Name]');
        var ShortNameInput = $(this).children('input[name=Short_Name]');

        if (LongNameInput.val().length == 0) {
            addError(LongNameInput, "Long Name cannot be empty.");
            isValid = false;
        }
        else if (LongNameInput.val().length > 16) {
            addError(LongNameInput, "Long Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(LongNameInput);
        }
        if (ShortNameInput.val().length == 0) {
            addError(ShortNameInput, "Short Name cannot be empty.");
            isValid = false;
        }
        else if (ShortNameInput.val().length > 2) {
            addError(ShortNameInput, "Short Name cannot exceed 2 characters.");
            isValid = false;
        }
        else {
            removeError(ShortNameInput);
        }

        event.preventDefault();
        return false;
    });

    $('.PlaceCreate > input[name=Long_Name]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Long Name cannot be empty.");
            }
            else if ($(this).val().length > 16) {
                addError($(this), "Long Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PlaceCreate > input[name=Short_Name]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Short Name cannot be empty.");
            }
            else if ($(this).val().length > 2) {
                addError($(this), "Short Name cannot exceed 2 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PlaceUpdate').submit(function (event) {
        var isValid = true;
        var LongNameInput = $(this).children('input[name=Long_Name]');
        var ShortNameInput = $(this).children('input[name=Short_Name]');

        if (LongNameInput.val().length > 16) {
            addError(LongNameInput, "Long Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(LongNameInput);
        }
        if (ShortNameInput.val().length > 2) {
            addError(ShortNameInput, "Short Name cannot exceed 2 characters.");
            isValid = false;
        }
        else {
            removeError(ShortNameInput);
        }

        event.preventDefault();
        return false;
    });

    $('.PlaceUpdate > input[name=Long_Name]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "Long Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PlaceUpdate > input[name=Short_Name]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 2) {
                addError($(this), "Short Name cannot exceed 2 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".UrgencyCreate").submit(function (event) {
        var isValid = true;
        var NameInput = $(this).children('input[name=Name]');
        var DescriptionInput = $(this).children('input[name=Description]');
        var LevelInput = $(this).children('input[name=Level]');

        if (NameInput.val().length == 0) {
            addError(NameInput, "Name cannot be empty.");
            isValid = false;
        }
        else if (NameInput.val().length > 16) {
            addError(NameInput, "Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(NameInput);
        }
        if (DescriptionInput.val().length == 0) {
            addError(DescriptionInput, "Description cannot be empty.");
            isValid = false;
        }
        else if (DescriptionInput.val().length > 64) {
            addError(DescriptionInput, "Description cannot exceed 64 characters.");
            isValid = false;
        }
        else {
            removeError(DescriptionInput);
        }
        if (!$.isNumeric(LevelInput.val())) {
            addError(LevelInput, "Urgency level must be a numeric value.");
            isValid = false;
        }
        else if (LevelInput.val() < 0) {
            addError(LevelInput, "Urgency level must be a postive value.");
            isValid = false;
        }
        else if (LevelInput.val() % 1 != 0) {
            addError(LevelInput, "Urgency level must be whole number.");
            isValid = false;
        }
        else {
            removeError(LevelInput);
        }

        event.preventDefault();
        return false;
    });

    $('.UrgencyCreate > input[name=Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Name cannot be empty.");
            }
            else if ($(this).val().length > 16) {
                addError($(this), "Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.UrgencyCreate > input[name=Description]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Description cannot be empty.");
            }
            else if ($(this).val().length > 64) {
                addError($(this), "Description cannot exceed 64 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.UrgencyCreate > input[name=Level], .UrgencyUpdate > input[name=Level]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val())) {
                addError($(this), "Urgency level must be a numeric value.");
            }
            else if ($(this).val() < 0) {
                addError($(this), "Urgency level must be a postive value.");
            }
            else if ($(this).val() % 1 != 0) {
                addError($(this), "Urgency level must be whole number.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $(".UrgencyUpdate").submit(function (event) {
        var isValid = true;
        var NameInput = $(this).children('input[name=Name]');
        var DescriptionInput = $(this).children('input[name=Description]');
        var LevelInput = $(this).children('input[name=Level]');

        if (NameInput.val().length > 16) {
            addError(NameInput, "Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(NameInput);
        }
        if (DescriptionInput.val().length > 64) {
            addError(DescriptionInput, "Description cannot exceed 64 characters.");
            isValid = false;
        }
        else {
            removeError(DescriptionInput);
        }
        if (!$.isNumeric(LevelInput.val())) {
            addError(LevelInput, "Urgency level must be a numeric value.");
            isValid = false;
        }
        else if (LevelInput.val() < 0) {
            addError(LevelInput, "Urgency level must be a postive value.");
            isValid = false;
        }
        else if (LevelInput.val() % 1 != 0) {
            addError(LevelInput, "Urgency level must be whole number.");
            isValid = false;
        }
        else {
            removeError(LevelInput);
        }

        event.preventDefault();
        return false;
    });

    $('.UrgencyUpdate > input[name=Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.UrgencyUpdate > input[name=Description]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 64) {
                addError($(this), "Description cannot exceed 64 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });
});