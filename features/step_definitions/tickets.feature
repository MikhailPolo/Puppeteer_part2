Feature: Booking tickets
    Scenario: Booking one ticket for tomorrow
        Given user went to the website, chose tomorrow's date, movie and time
        When user selects place
        When user clicks the book button
        Then user see text 'Получить код бронирования'
        

    Scenario: Booking two ticket for tomorrow
        Given user went to the website, chose tomorrow's date, movie and time
        When user selects one place
        When user selects two place
        When user clicks the book button
        When user clicks the get booking code button
        Then user sees the QR code


    Scenario: Booking purchase of occupied space for tomorrow
        Given user went to the website, chose tomorrow's date, movie and time
        When user selects two place
        When user clicks the book button
        Then user see button disabled 'true'