// Simple health-check
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', msg: 'Feedback backend up' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    Logger.log('Event object: ' + JSON.stringify(e));

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Feedback");
    var data = {};

    // 1) Handle JSON or FormData
    if (e.postData && e.postData.contents) {
      var ctype = (e.postData.type || '').toLowerCase();
      if (ctype.indexOf('application/json') !== -1) {
        data = JSON.parse(e.postData.contents);
      } else {
        // For FormData
        if (e.parameter && Object.keys(e.parameter).length) data = e.parameter;
      }
    } else if (e.parameter && Object.keys(e.parameter).length) {
      data = e.parameter;
    } else {
      return jsonError('No POST data received. Send JSON or form fields.');
    }

    var name = (data.name || '').toString().trim();
    var email = (data.email || '').toString().trim();
    var message = (data.message || '').toString().trim();
    var rating = (data.rating || '').toString().trim(); // Optional

    if (!name && !email && !message) {
      return jsonError('Empty payload. Provide at least one of: name, email, message.');
    }

    // Optional: Basic email validation
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonError('Invalid email format.');
    }

    // Append to sheet
    sheet.appendRow([ new Date(), name, email, message, rating ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', msg: 'Feedback saved' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('doPost error: ' + err.toString());
    return jsonError(err.toString());
  }
}

function jsonError(msg) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'error', msg: msg }))
    .setMimeType(ContentService.MimeType.JSON);
}
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', msg: 'Feedback backend up' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    Logger.log('Event object: ' + JSON.stringify(e));

    // Get the correct sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Timeline");
    if (!sheet) return jsonError('Sheet "Timeline" not found.');

    var data = {};

    // 1) Handle JSON or FormData
    if (e.postData && e.postData.contents) {
      var ctype = (e.postData.type || '').toLowerCase();
      if (ctype.indexOf('application/json') !== -1) {
        data = JSON.parse(e.postData.contents);
      } else {
        // For FormData
        if (e.parameter && Object.keys(e.parameter).length) data = e.parameter;
      }
    } else if (e.parameter && Object.keys(e.parameter).length) {
      data = e.parameter;
    } else {
      return jsonError('No POST data received. Send JSON or form fields.');
    }

    var name = (data.name || '').toString().trim();
    var email = (data.email || '').toString().trim();
    var message = (data.message || '').toString().trim();
    var rating = (data.rating || '').toString().trim(); // Optional

    if (!name && !email && !message) {
      return jsonError('Empty payload. Provide at least one of: name, email, message.');
    }

    // Optional: Basic email validation
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonError('Invalid email format.');
    }

    // Append row to Timeline sheet
    sheet.appendRow([ new Date(), name, email, message, rating ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', msg: 'Feedback saved' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('doPost error: ' + err.toString());
    return jsonError(err.toString());
  }
}

function jsonError(msg) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'error', msg: msg }))
    .setMimeType(ContentService.MimeType.JSON);
}
