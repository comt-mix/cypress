describe("main screen", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("첫번째 카드 클릭시 'red'로 색상 변경", () => {
    cy.get("#first").click();
    cy.get("#first").should("have.css", "background-color", "rgb(255, 0, 0)");
  });

  it("두번째 카드 클릭시 'blue'로 색상 변경", () => {
    cy.get("#second").click();
    cy.get("#second").should("have.css", "background-color", "rgb(0, 0, 255)");
  });

  it("세번째 카드 클릭시 'gray'로 색상 변경", () => {
    cy.get("#third").click();
    cy.get("#third").should(
      "have.css",
      "background-color",
      "rgb(128, 128, 128)"
    );
  });
});
